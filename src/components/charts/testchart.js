import { conn } from "../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";

const TestChart = (props) => {
  const container = useRef(null);
  const transition_duration = 500
  useEffect(() => {
    createChart();
  });

  const createChart = () => {
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

    thresholds = Object.keys(thresholds).map((e) => {
      return {
        period: e,
        val: thresholds[e],
        starting_year: domain_map[e],
      };
    });

    let node = container.current;

    let containerdims = {
      width: 500,
      height: 500,
    };
    let margins = {
      t: 20,
      b: 20,
      r: 80,
      l: 80,
    };

    let chartdims = {
      width: containerdims.width - margins.l - margins.r,
      height: containerdims.height - margins.t - margins.t,
    };

    let svg = d3
      .select(node)
      .selectAll("svg")
      .data([0])
      .join("svg")
      .attr("width", containerdims.width)
      .attr("height", containerdims.height);

    let chart_g = svg
      .selectAll(".chart-g")
      .data([0])
      .join("g")
      .attr("class", "chart-g")
      .attr("x", margins.l)
      .attr("y", margins.t);

    let xScale = d3
      .scaleTime()
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

    let threshold_points = chart_g
      .selectAll(".thresh-point")
      .data(thresholds)
      .join("circle")
      .attr("class", "thresh-point")
      .transition().duration(transition_duration)
      .attr("r", 5)
      .attr("cx", (d) => xScale(d.starting_year))
      .attr("cy", (d) => yScale(d.val))
      .style("fill", "red");

    // instantiate path (need to use 'data' rather than 'datum' to execute join)
    chart_g
      .selectAll(".emissions-line")
      .data([0])
      .join("path")
      .attr("class", "emissions-line");

    // select path once instantiated
    let emissions_line = chart_g
      .selectAll(".emissions-line")
      .datum(emissions)
      .join("path")
      .transition().duration(transition_duration)

      .attr("class", "emissions-line")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x((d) => xScale(d.year))
          .y((d) => yScale(d.val))
      );

    return;
  };

  return <div ref={container}></div>;
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default conn(mapStateToProps)(TestChart);
