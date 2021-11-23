import { conn } from "../../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";

import { createAxes } from "./axes";
import { createTitles } from "./titles";

import { createDimensions } from "./dimensions";
import { createScales } from "./scales";
import { createEmissionAnnotations } from "./annotations";
import { createSvgGroups } from "./svggroups";
import { createEmissionsLine, createThresholdPoints } from "./dataplot";
import { createLegend } from "./legend";
import { createDataArrays } from "./datacalcs";
import { createBottomArea, createMiddleArea, createClipArea } from "./areas";

const LinePlot = (props) => {
  const container = useRef(null);

  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    let node = container.current;

    let margins = {
      t: 50,
      b: 175,
      r: 200,
      l: 100,
    };

    let { containerdims, chartdims } = createDimensions(
      node,
      margins,
      props.window
    );

    let colorTableau = d3.schemeTableau10;

    const colors = {
      bottomFill: "rgba(0,0,0,0.1)",
      topFill: "black",
      middleFill: colorTableau[2],
      middleFillStroke: "black",
      emissionsLineStroke: colorTableau[0],
      emissionsCircleFill: colorTableau[0],
      emissionsCircleStroke: "black",
      thresholdCircleFillOn: colorTableau[2],
      thresholdCircleStrokeOn: "black",
      thresholdCircleFillOff: colorTableau[3],
      thresholdCircleStrokeOff: "black",
      annotationLineOn: "black",
      annotationLineOff: "black",
      annotationTextOn: colorTableau[2],
      annotationTextOff: "black",
    };

    const transition_duration = 0;
    const area_transition_duration = 0;
    const domain_padding = 1.2;

    let { emissions, emissions_simple, thresholds, areaArrays } =
      createDataArrays(
        props.building.emissions_thresholds,
        props.building.annual_emissions,
        props.building.building_validation
      );

    let { svg, plot_g, annotation_g, legend_g, axis_g } = createSvgGroups({
      containerdims: containerdims,
      chartdims: chartdims,
      margins: margins,
      node: node,
    });

    let { xScale, yScale } = createScales({
      chartdims: chartdims,
      emissions: emissions,
      thresholds: thresholds,
      domain_padding: domain_padding,
    });

    createAxes({
      svg: axis_g,
      xScale: xScale,
      yScale: yScale,
      margins: margins,
      chartdims: chartdims,
      transition_duration: transition_duration,
    });

    createBottomArea({
      xScale: xScale,
      yScale: yScale,
      fill: colors.bottomFill,
      element: plot_g,
      data: areaArrays.bottom,
      duration: area_transition_duration,
      chartdims: chartdims,
    });

    createMiddleArea({
      xScale: xScale,
      yScale: yScale,
      transition_duration: area_transition_duration,
      data: areaArrays.middle,
      element: plot_g,
      fill: colors.middleFill,
      stroke: colors.middleFillStroke,
      clipPath: "url(#thresh-clip-id)",
    });

    createClipArea({
      clipId: "thresh-clip-id",
      xScale: xScale,
      yScale: yScale,
      data: emissions_simple,
      chartdims: chartdims,
      element: plot_g,
    });

    createEmissionsLine({
      xScale: xScale,
      yScale: yScale,
      element: plot_g,
      data: emissions_simple,
      colors: colors,
      transition_duration: transition_duration,
    });

    createEmissionAnnotations({
      element: annotation_g,
      data: thresholds,
      transition_duration: transition_duration,
      xScale: xScale,
      yScale: yScale,
      lineColorOn: colors.annotationLineOn,
      lineColorOff: colors.annotationLineOff,
      textColorOn: colors.annotationTextOn,
      textColorOff: colors.annotationTextOff,
    });
    createThresholdPoints({
      element: plot_g,
      data: thresholds,
      xScale: xScale,
      yScale: yScale,
      transition_duration: transition_duration,
      colors: colors,
    });

    createTitles({
      element: svg,
      margins: margins,
      chartdims: chartdims,
    });

    createLegend({
      element: legend_g,
      colors: colors,
    });

    return;
  };

  return <div style={{ height: "100%", width: "100%" }} ref={container} />;
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(LinePlot);
