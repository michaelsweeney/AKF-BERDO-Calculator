import { conn } from "../../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";

import { createAxisGroups } from "./axisgroups";
import { createThresholdTitles } from "./thresholdtitles";
import { createACPScales } from "./acpscales";

import { createThresholdScales } from "./thresholdscales";
import { createThresholdAnnotations } from "./thresholdannotations";
import { createSvgGroups } from "./svggroups";
import { createEmissionsLine, createThresholdPoints } from "./dataplot";
import { createThresholdLegend } from "./thresholdlegend";
import { createDataArrays } from "./datacalcs";
import {
  createBottomArea,
  createMiddleArea,
  createClipArea,
} from "./thresholdareas";

const LinePlot = (props) => {
  const container = useRef(null);

  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    let node = container.current;

    /*
    --------------
    GENERAL DIMENSIONS AND AESTHETICS
    --------------
    */

    let margins = {
      t: 50,
      b: 175,
      r: 200,
      l: 100,
    };

    let containerdims = {
      width: node
        ? node.getBoundingClientRect()["width"]
        : props.window.dims.width - 400,
      height: node
        ? node.getBoundingClientRect()["height"]
        : props.window.dims.height - 225,
    };

    let chartdims = {
      width: containerdims.width - margins.l - margins.r,
      height: containerdims.height - margins.t - margins.b,
    };

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

    /*
    --------------
    GENERATE DATA ARRAYS
    --------------
    */

    let { emissions, emissions_simple, thresholds, areaArrays } =
      createDataArrays(
        props.building.emissions_thresholds,
        props.building.annual_emissions,
        props.building.building_validation,
        props.building.alternative_compliance_payments
      );

    /*
    --------------
    COMMON SHARED SVG ELEMENTS AND DIMENSIONS
    --------------
    */

    let { svg, plot_g, annotation_g, legend_g, axis_g, title_g } =
      createSvgGroups({
        containerdims: containerdims,
        chartdims: chartdims,
        margins: margins,
        node: node,
      });

    let { x_axis_bottom_g, x_axis_top_g, y_axis_left_g, y_axis_right_g } =
      createAxisGroups({
        svg: axis_g,
        margins: margins,
        chartdims: chartdims,
      });

    /*
    --------------
    THRESHOLD VIEW
    --------------
    */

    let { xThresholdScale, yThresholdScale } = createThresholdScales({
      chartdims: chartdims,
      emissions: emissions,
      thresholds: thresholds,
      domain_padding: domain_padding,
    });

    // apply threshold scales to axes
    x_axis_top_g.call(
      d3
        .axisTop()
        .scale(xThresholdScale)
        .ticks(0)
        .tickFormat(d3.format("0"))
        .tickSizeOuter(0)
    );
    x_axis_bottom_g.call(
      d3
        .axisBottom()
        .scale(xThresholdScale)
        .tickFormat(d3.format("0"))
        .tickSizeOuter(0)
    );
    y_axis_left_g.call(
      d3
        .axisLeft()
        .scale(yThresholdScale)
        .ticks(5)
        .tickSizeOuter(5)
        .tickFormat(d3.format(".2f"))
        .tickSizeOuter(0)
    );
    y_axis_right_g.call(
      d3
        .axisLeft()
        .scale(yThresholdScale)
        .ticks(0)
        .tickFormat(d3.format(".2f"))
        .tickSizeOuter(0)
    );

    let bottom_area = createBottomArea({
      xScale: xThresholdScale,
      yScale: yThresholdScale,
      fill: colors.bottomFill,
      element: plot_g,
      data: areaArrays.bottom,
      chartdims: chartdims,
    });

    let middle_area = createMiddleArea({
      xScale: xThresholdScale,
      yScale: yThresholdScale,
      data: areaArrays.middle,
      element: plot_g,
      fill: colors.middleFill,
      stroke: colors.middleFillStroke,
      clipPath: "url(#thresh-clip-id)",
    });

    let clip_area = createClipArea({
      clipId: "thresh-clip-id",
      xScale: xThresholdScale,
      yScale: yThresholdScale,
      data: emissions_simple,
      chartdims: chartdims,
      element: plot_g,
    });

    let { emissions_line, emissions_today_circle } = createEmissionsLine({
      xScale: xThresholdScale,
      yScale: yThresholdScale,
      element: plot_g,
      data: emissions_simple,
      colors: colors,
    });

    let { threshold_annotations, threshold_lines } = createThresholdAnnotations(
      {
        element: annotation_g,
        data: thresholds,
        transition_duration: transition_duration,
        xScale: xThresholdScale,
        yScale: yThresholdScale,
        lineColorOn: colors.annotationLineOn,
        lineColorOff: colors.annotationLineOff,
        textColorOn: colors.annotationTextOn,
        textColorOff: colors.annotationTextOff,
      }
    );
    let threshold_points = createThresholdPoints({
      element: plot_g,
      data: thresholds,
      xScale: xThresholdScale,
      yScale: yThresholdScale,
      transition_duration: transition_duration,
      colors: colors,
    });

    let { threshold_x_title, threshold_y_title, threshold_chart_title } =
      createThresholdTitles({
        element: title_g,
        margins: margins,
        chartdims: chartdims,
      });

    let threshold_legend_g = createThresholdLegend({
      element: legend_g,
      colors: colors,
    });

    /*
    --------------
    ACP VIEW
    --------------
    */

    let { alternative_compliance_payments } = props.building;
    console.log(alternative_compliance_payments);

    // shared elements
    // svg, plot_g, annotation_g, legend_g, axis_g
    // shared variables
    // chartdims

    // containerdims

    let { xACPScale, yACPScaleLeft, yACPScaleRight } = createACPScales({
      chartdims: chartdims,
      data: alternative_compliance_payments,
      domain_padding: domain_padding,
    });

    // create axes (same axis variable as above)
    // create emission-baseline line (same plot element as above)
    // create bars
    // create titles
    //

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
