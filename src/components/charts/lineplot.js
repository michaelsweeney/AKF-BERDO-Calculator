import { conn } from "../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";

const LinePlot = (props) => {
  const container = useRef(null);
  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    const transition_duration = 500;

    let emissions = props.building.annual_emissions.map((e) => {
      return { year: e.year, val: e.normalized.total };
    });

    let thresholds = props.building.emissions_thresholds.normalized;
    let domain_padding = 1.2;

    let domain_map = {
      "2025-2029": 2025,
      "2030-2034": 2030,
      "2035-2039": 2035,
      "2040-2044": 2040,
      "2045-2049": 2045,
      "2050-": 2050,
    };

    const getThresholdsMet = (e) => {
      let emission_period = emissions.filter((f) => f.year == domain_map[e])[0];
      if (emission_period) {
        if (emission_period.val < thresholds[e]) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    };

    thresholds = Object.keys(thresholds).map((e) => {
      return {
        period: e,
        val: thresholds[e],
        starting_year: domain_map[e],
        threshold_met: getThresholdsMet(e),
      };
    });

    let node = container.current;

    let containerdims = {
      width: 800,
      height: 500,
    };
    let margins = {
      t: 20,
      b: 20,
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
    let xAxisBottom = d3.axisBottom().scale(xScale).tickFormat(d3.format("0"));

    let xAxisTop = d3
      .axisTop()
      .scale(xScale)
      .ticks(0)
      .tickFormat(d3.format("0"));

    let xaxistop = svg
      .selectAll(".xaxis-g-top")
      .data([0])
      .join("g")
      .attr("class", "xaxis-g-top")
      .attr("transform", () => `translate(${margins.l},${margins.t})`)
      .call(xAxisTop);

    let xaxisgbottom = svg
      .selectAll(".xaxis-g-bottom")
      .data([0])
      .join("g")
      .attr("class", "xaxis-g-bottom")
      .attr(
        "transform",
        () => `translate(${margins.l},${margins.t + chartdims.height})`
      )
      .call(xAxisBottom);

    let yAxisLeft = d3
      .axisLeft()
      .scale(yScale)
      .ticks(5)
      .tickFormat(d3.format(".2f"));

    let yAxisRight = d3
      .axisLeft()
      .scale(yScale)
      .ticks(0)
      .tickFormat(d3.format(".2f"));

    let yaxisgleft = svg
      .selectAll(".yaxis-g-left")
      .data([0])
      .join("g")
      .attr("class", "yaxis-g-left")
      .attr("transform", () => `translate(${margins.l},${margins.t})`)
      .transition()
      .duration(transition_duration)
      .call(yAxisLeft);

    let yaxisgright = svg
      .selectAll(".yaxis-g-right")
      .data([0])
      .join("g")
      .attr("class", "yaxis-g-right")
      .attr(
        "transform",
        () => `translate(${margins.l + chartdims.width},${margins.t})`
      )
      .transition()
      .duration(transition_duration)
      .call(yAxisRight);

    // create data points
    let threshold_points = plot_g
      .selectAll(".thresh-point")
      .data(thresholds)
      .join("circle")
      .attr("class", "thresh-point")
      .transition()
      .duration(transition_duration)
      .attr("r", 5)
      .attr("cx", (d) => xScale(d.starting_year))
      .attr("cy", (d) => yScale(d.val))
      .style("fill", (d) => (d.threshold_met ? "black" : "red"));

    let threshold_lines = plot_g
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
      .attr("stroke-dasharray", "4 0 4")
      .style("stroke", (d) => (d.threshold_met ? "black" : "red"));

    let threshold_annotations = annotation_g
      .selectAll(".threshold-annotation")
      .data(thresholds)
      .join("text")
      .attr("class", "threshold-annotation")
      .transition()
      .duration(transition_duration)
      .attr("x", xScale(2050) + 50)
      .attr("y", (d) => yScale(d.val))
      .text((d) => `${d.period}: ${d3.format(".2f")(d.val)} kgCO2e/sf/yr`)
      .style("stroke", (d) => (d.threshold_met ? "black" : "red"))
      .style("font-weight", "lighter")
      .style("font-size", "0.75em");

    plot_g
      .selectAll(".emissions-line")
      .data([0])
      .join("path")
      .attr("class", "emissions-line");

    let emissions_line = plot_g
      .selectAll(".emissions-line")
      .datum(emissions)
      .join("path")
      .transition()
      .duration(transition_duration)

      .attr("class", "emissions-line")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2.5)
      .attr(
        "d",
        d3
          .line()
          .x((d) => xScale(d.year))
          .y((d) => yScale(d.val))
      )
      .attr("fill", "none");

    return;
  };

  return <div ref={container}></div>;
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default conn(mapStateToProps)(LinePlot);
