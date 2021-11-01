import { conn } from "../../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";

import { createAxes } from "./axes";
import { createTitles } from "./titles";

import { createDimensions } from './dimensions'
import { createScales } from './scales'
import { createEmissionAnnotations } from "./annotations";
import { createSvgGroups } from './svggroups';
import { createEmissionsLine, createThresholdPoints } from "./dataplot";
import { createLegend } from './legend'
import { createDataArrays } from "./datacalcs";
import {
  createTopArea,
  createBottomArea,
  createMiddleArea,
  createClipArea,
} from "./areas";



const LinePlot = (props) => {
  const container = useRef(null);

  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    let node = container.current;

    let margins = {
      t: 50,
      b: 200,
      r: 300,
      l: 100,
    }

    let { containerdims, chartdims } = createDimensions(node, margins, props.window)

    const colors = {
      bottomFill: "rgba(0,0,0,0)",
      topFill: "rgba(0,0,0,0)",
      middleFill: "rgba(220,0,0,0.5)",
      emissionsLineStroke: "rgba(0,220,220,1)",
      emissionsCircleFill: "rgba(0,220,220,1)",
      emissionsCircleStroke: 'rgba(0,0,0,1)',
      thresholdCircleFillOn: 'rgba(220,0,0,1)',
      thresholdCircleStrokeOn: 'rgba(0,0,0,1)',
      thresholdCircleFillOff: 'rgba(150,150,150,1)',
      thresholdCircleStrokeOff: 'rgba(0,0,0,1)',
    };

    const transition_duration = 0;
    const area_transition_duration = 0;
    const domain_padding = 1.2;

    let { emissions, emissions_simple, thresholds, areaArrays } = createDataArrays(props.building.emissions_thresholds, props.building.annual_emissions)


    let { svg, plot_g, annotation_g, legend_g, axis_g } = createSvgGroups({
      containerdims: containerdims,
      chartdims: chartdims,
      margins: margins,
      node: node
    })

    let { xScale, yScale } = createScales({
      chartdims: chartdims,
      emissions: emissions,
      thresholds: thresholds,
      domain_padding: domain_padding,
    })


    createAxes({
      svg: axis_g,
      xScale: xScale,
      yScale: yScale,
      margins: margins,
      chartdims: chartdims,
      transition_duration: transition_duration,
    });


    createTopArea({
      xScale: xScale,
      yScale: yScale,
      duration: area_transition_duration,
      data: areaArrays.top,
      fill: colors.topFill,
      element: plot_g,
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
      transition_duration: transition_duration
    })


    createThresholdPoints({
      element: plot_g,
      data: thresholds,
      xScale: xScale,
      yScale: yScale,
      transition_duration: transition_duration,
      colors: colors
    })


    createEmissionAnnotations({
      element: annotation_g,
      data: thresholds,
      transition_duration: transition_duration,
      xScale: xScale,
      yScale: yScale,
    })

    createTitles({
      element: svg,
      margins: margins,
      chartdims: chartdims,
    });


    createLegend({
      element: legend_g,
      colors: colors

    })

    return;
  };

  return (
    <div style={{ height: "100%", width: '100%' }} ref={container} />
  );
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(LinePlot);
