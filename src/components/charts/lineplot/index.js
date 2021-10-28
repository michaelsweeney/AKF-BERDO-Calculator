import { conn } from "../../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";

import { createAxes } from "./axes";
import { addTitles } from "./titles";
import { calcAreas } from "./areacalcs";
import { getThresholdArray } from "./thresholdarray";
import {
  createTopArea,
  createBottomArea,
  createMiddleArea,
  createClipArea,
} from "./areas";

const LinePlot = (props) => {
  const strokes = {
    bottomFill: "rgba(0,0,0,0.1)",
    topFill: "rgba(0,0,0,0)",
    middleFill: "rgb(220,50,50)",
    emissionsLine: "rgba(0,0,0,1)",
  };

  const container = useRef(null);
  const containerPadding = { width: 50, height: 50 };

  const containerdims = {
    width: container.current
      ? container.current.getBoundingClientRect()["width"] -
        containerPadding.width
      : props.window.dims.width - 400,
    height: container.current
      ? container.current.getBoundingClientRect()["height"] -
        containerPadding.height
      : props.window.dims.height - 225,
  };

  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    const transition_duration = 0;
    const area_transition_duration = 0;
    let emissions = props.building.annual_emissions.map((e) => {
      return { year: e.year, val: e.normalized.total };
    });

    // simplified emission line consisting of first and last points
    let emissions_simple =
      emissions.length > 30
        ? [emissions.slice(0)[0], emissions.slice(-1)[0]]
        : emissions;

    let thresholds = props.building.emissions_thresholds.normalized;

    thresholds = getThresholdArray(thresholds, emissions);

    let domain_padding = 1.2;

    let node = container.current;

    let margins = {
      t: 50,
      b: 50,
      r: 250,
      l: 80,
    };

    let chartdims = {
      width: containerdims.width - margins.l - margins.r,
      height: containerdims.height - margins.t - margins.t,
    };

    // create containers
    let svg = d3
      .select(node)
      .selectAll("svg")
      .data([0])
      .join("svg")
      .attr("width", containerdims.width)
      .attr("height", containerdims.height);

    let plot_g = svg
      .selectAll(".plot-g")
      .data([0])
      .join("g")
      .attr("class", "plot-g")
      .attr("transform", `translate(${margins.l}, ${margins.t})`);

    let annotation_g = svg
      .selectAll(".annotation-g")
      .data([0])
      .join("g")
      .attr("class", "annotation-g")
      .attr("transform", `translate(${margins.l}, ${margins.t})`);

    // create scales
    let xScale = d3
      .scaleLinear()
      .domain([2018, 2050])
      .range([0, chartdims.width]);

    let yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max([
          ...emissions.map((e) => e.val),
          ...thresholds.map((e) => e.val),
        ]) * domain_padding,
      ])
      .range([chartdims.height, 0]);

    // create axes
    createAxes({
      svg: svg,
      xScale: xScale,
      yScale: yScale,
      margins: margins,
      chartdims: chartdims,
      transition_duration: transition_duration,
    });

    // area plot
    let { top, middle, bottom } = calcAreas(thresholds, emissions);

    createTopArea({
      xScale: xScale,
      yScale: yScale,
      stroke: "rgba(0,0,0,0)",
      duration: area_transition_duration,
      data: top,
      fill: strokes.topFill,
      element: plot_g,
    });

    createBottomArea({
      xScale: xScale,
      yScale: yScale,
      fill: strokes.bottomFill,
      element: plot_g,
      data: bottom,
      duration: area_transition_duration,
      chartdims: chartdims,
    });

    createMiddleArea({
      xScale: xScale,
      yScale: yScale,
      transition_duration: area_transition_duration,
      data: middle,
      element: plot_g,
      fill: strokes.middleFill,
      stroke: "red",
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

    // create data points
    plot_g
      .selectAll(".thresh-point")
      .data(thresholds)
      .join("circle")
      .attr("class", "thresh-point")
      .transition()
      .duration(transition_duration)
      .attr("r", 5)
      .attr("cx", (d) => xScale(d.starting_year))
      .attr("cy", (d) => yScale(d.val))
      .style("fill", (d) => (d.threshold_met ? "gray" : "red"));

    plot_g
      .selectAll(".thresh-line")
      .data(thresholds)
      .join("line")
      .attr("class", "thresh-line")
      .transition()
      .duration(transition_duration)
      .attr("x1", (d) => xScale(d.starting_year))
      .attr("x2", (d) => xScale("2050"))
      .attr("y1", (d) => yScale(d.val))
      .attr("y2", (d) => yScale(d.val))
      .attr("stroke-dasharray", "2 0 2")
      .style("stroke", (d) => (d.threshold_met ? "gray" : "red"));

    annotation_g
      .selectAll(".threshold-annotation")
      .data(thresholds)
      .join("text")
      .attr("class", "threshold-annotation")
      .transition()
      .duration(transition_duration)
      .attr("x", xScale(2050) + 25)
      .attr("y", (d) => yScale(d.val))
      .text((d) => `${d.period}: ${d3.format(".2f")(d.val)} kgCO2e/sf/yr`)
      .style("fill", (d) => (d.threshold_met ? "black" : "red"))
      .style("font-size", "1em");

    plot_g
      .selectAll(".emissions-line")
      .data([0])
      .join("path")
      .attr("class", "emissions-line");

    plot_g
      .selectAll(".emissions-line")
      .datum(emissions_simple)
      .join("path")
      .transition()
      .duration(transition_duration)

      .attr("class", "emissions-line")
      .attr("stroke", strokes.emissionsLine)
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .line()
          .x((d) => xScale(d.year))
          .y((d) => yScale(d.val))
      )
      .attr("fill", "none");

    // add titles
    addTitles({
      annotation_g: svg,
      margins: margins,
      chartdims: chartdims,
    });

    return;
  };

  return (
    <div
      style={{
        height: "100%",
      }}
      ref={container}
    ></div>
  );
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(LinePlot);
