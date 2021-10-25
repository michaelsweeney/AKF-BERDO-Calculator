import { conn } from "../../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";

import { makeAxes } from "./axes";
import { addTitles } from "./titles";
import { calcAreas } from "./areacalcs";
import { getThresholdArray } from "./thresholdarray";

const LinePlot = (props) => {
  const strokes = {
    bottomFill: "#5086fb",
    topFill: "#feb9b9",
    middleFill: "#fd8787",
    emissionsLine: "#0449dc",
  };

  const containerdims = {
    width: props.window.dims.width - 400,
    height: props.window.dims.height - 225,
  };

  const container = useRef(null);
  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    const transition_duration = 500;
    const area_transition_duration = 1000;
    let emissions = props.building.annual_emissions.map((e) => {
      return { year: e.year, val: e.normalized.total };
    });

    let emissions_for_line =
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
    makeAxes({
      svg: svg,
      xScale: xScale,
      yScale: yScale,
      margins: margins,
      chartdims: chartdims,
      transition_duration: transition_duration,
    });

    // area plot
    let { top, middle, bottom } = calcAreas(thresholds, emissions);

    let threshAreaGen = d3
      .area()
      .x((d) => {
        return xScale(d.year);
      })

      .y0((d) => 0)
      .y1((d) => {
        return yScale(d.val);
      });
    plot_g.selectAll(".thresh-area").attr("opacity", 0);

    plot_g
      .selectAll(".thresh-area")
      .data([top])
      .join("path")
      .attr("class", "thresh-area")
      .attr("d", threshAreaGen)
      .transition()
      .duration(area_transition_duration)
      .attr("fill", strokes.topFill)

      .attr("stroke", d3.schemeCategory10[1])
      .attr("opacity", 1);

    let emissionsAreaGen = d3
      .area()
      .x((d) => xScale(d.year))
      .y0((d) => chartdims.height)
      .y1((d) => yScale(d.val));

    plot_g.selectAll(".emissions-area").attr("opacity", 0);

    plot_g
      .selectAll(".emissions-area")
      .data([bottom])
      .join("path")
      .attr("class", "emissions-area")
      .attr("d", emissionsAreaGen)
      .transition()
      .duration(area_transition_duration)
      .attr("fill", strokes.bottomFill)
      .attr("opacity", 1);

    plot_g.selectAll(".intersection-area").attr("opacity", 0);

    plot_g
      .selectAll(".intersection-area")
      .data([middle])
      .join("polygon")
      .attr("class", "intersection-area")
      .attr("clip-path", "url(#top-clip)")
      .attr("points", (d) => {
        return d
          .map((d) => {
            return [xScale(d.year), yScale(d.val)].join(",");
          })
          .join(" ");
      })
      .transition()
      .duration(area_transition_duration)

      .attr("fill", strokes.middleFill)
      .attr("stroke", "red")
      .attr("opacity", 1);

    // clip anything above line...
    // let clipAreaGen = d3
    //   .area()
    //   .x((d) => xScale(d.year))
    //   .y0((d) => chartdims.height)
    //   .y1((d) => yScale(d.val));

    // plot_g
    //   .selectAll(".clip-area")
    //   .data([0])
    //   .join("clipPath")
    //   .attr("id", "top-clip")
    //   .attr("class", "clip-area");
    // plot_g
    //   .selectAll(".clip-area")
    //   .datum(emissions_for_line)
    //   .join("clipPath")
    //   .attr("id", "top-clip")
    //   .attr("class", "clip-area")
    //   .attr("d", clipAreaGen)
    //   .transition()
    //   .duration(transition_duration);
    // .attr("fill", "black")
    // .attr("stroke-width", 2);

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
      .datum(emissions_for_line)
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

  return <div ref={container}></div>;
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(LinePlot);
