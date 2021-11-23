import { conn } from "../../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";
import { createDimensions } from "./dimensions";

const ACPPlot = (props) => {
  const container = useRef(null);

  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    let data = props.building.alternative_compliance_payments;
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

    console.log(containerdims, chartdims);
    // svg and groups
    let svg = d3
      .select(node)
      .selectAll("svg")
      .data([0])
      .join("svg")
      .attr("width", containerdims.width)
      .attr("height", containerdims.height);

    let axis_g = svg
      .selectAll(".axis-g")
      .data([0])
      .join("g")
      .attr("class", "axis-g")
      .attr("transform", `translate(${margins.l}, ${margins.t})`);

    let legend_g = svg
      .selectAll(".legend-g")
      .data([0])
      .join("g")
      .attr("class", "legend-g")
      .attr(
        "transform",
        `translate(${chartdims.width / 2 - 225}, ${
          margins.t + chartdims.height + 50
        })`
      );

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

    // scales
    //   let xAxisBottom = d3
    //   .axisBottom()
    //   .scale(xScale)
    //   .tickFormat(d3.format("0"))
    //   .tickSizeOuter(0);

    // let xAxisTop = d3
    //   .axisTop()
    //   .scale(xScale)
    //   .ticks(0)
    //   .tickFormat(d3.format("0"))
    //   .tickSizeOuter(0);
    let xScale = d3
      .scaleTime()
      .range([0, chartdims.width])
      .domain([2018, 2051]);

    let acp_extent_high = d3.extent(data, (d) => d["acp_payment"]);
    let acp_extent_low = d3.extent(data, (d) => d["payment_avoidance"]);
    let acp_extent = [acp_extent_low[0], acp_extent_high[1]];

    let yScaleLeft = d3
      .scaleLinear()
      .range([chartdims.height, 0])
      .domain(acp_extent);

    let yScaleRight = d3
      .scaleLinear()
      .range([chartdims.height, 0])
      .domain(d3.extent(data, (d) => d["carbon_deficit"]));

    let xaxis_top_g = axis_g
      .selectAll(".x-axis-top-g")
      .data([0])
      .join("g")
      .attr("class", "x-axis-top-g")
      .call(
        d3
          .axisTop()
          .scale(xScale)
          .ticks(0)
          .tickFormat(d3.format("0"))
          .tickSizeOuter(0)
      );

    let xaxis_bottom_g = axis_g
      .selectAll(".x-axis-bottom-g")
      .data([0])
      .join("g")
      .attr("class", "x-axis-bottom-g")
      .attr("transform", `translate(${0},${chartdims.height / 2})`)
      .call(
        d3
          .axisBottom()
          .scale(xScale)
          .tickFormat(d3.format("0"))
          .tickSizeOuter(0)
      );

    let yaxis_left_g = axis_g
      .selectAll(".y-axis-left-g")
      .data([0])
      .join("g")
      .attr("class", "y-axis-left-g")
      .attr("transform", `translate(${0},${0})`)
      .call(d3.axisLeft().scale(yScaleLeft).tickSizeOuter(0));

    let yaxis_right_g = axis_g
      .selectAll(".y-axis-right-g")
      .data([0])
      .join("g")
      .attr("class", "y-axis-right-g")
      .attr("transform", `translate(${chartdims.width},${0})`)
      .call(d3.axisRight().scale(yScaleRight).tickSizeOuter(0));

    // let paymentLine = d3
    //   .line()
    //   .x((d) => xScale(d.year))
    //   .y((d) => yScaleLeft(d.acp_payment));

    // plot_g
    //   .selectAll(".payment-line")
    //   .data([0])
    //   .join("path")
    //   .attr("class", "payment-line");

    // plot_g
    //   .selectAll(".payment-line")
    //   .datum(data)
    //   .join("path")
    //   .attr("class", "payment-line")

    //   .attr("stroke", "blue")
    //   .attr("stroke-width", 2)
    //   .attr("fill", "none")
    //   .attr("d", paymentLine);

    plot_g
      .selectAll(".payment-bar")
      .data(data)
      .join("rect")
      .attr("class", "payment-bar")
      .attr("x", (d) => xScale(d.year) - 5)
      .attr("y", (d) => yScaleLeft(d.acp_payment) / 2)
      .attr("height", (d) => chartdims.height - yScaleLeft(d.acp_payment))
      .attr("width", 10)
      .style("fill", colorTableau[2]);
    plot_g
      .selectAll(".payment-avoidance-bar")
      .data(data)
      .join("rect")
      .attr("class", "payment-avoidance-bar")
      .attr("x", (d) => xScale(d.year) - 5)
      .attr("y", (d) => yScaleLeft(d.acp_payment) / 2)
      .attr("height", (d) => chartdims.height - yScaleLeft(d.payment_avoidance))
      .attr("width", 10)
      .style("fill", colorTableau[3]);
    // console.log(data);
  };

  // const createAxes = (config) => {};

  // createAxes({});

  return <div style={{ height: "100%", width: "100%" }} ref={container}></div>;
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(ACPPlot);
