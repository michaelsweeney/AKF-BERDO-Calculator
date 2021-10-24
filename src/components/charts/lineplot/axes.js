import * as d3 from "d3";

const makeAxes = (props) => {
  const { svg, xScale, yScale, chartdims, margins, transition_duration } =
    props;
  // create axes
  let xAxisBottom = d3
    .axisBottom()
    .scale(xScale)
    .tickFormat(d3.format("0"))
    .tickSizeOuter(0);

  let xAxisTop = d3
    .axisTop()
    .scale(xScale)
    .ticks(0)
    .tickFormat(d3.format("0"))
    .tickSizeOuter(0);

  svg
    .selectAll(".xaxis-g-top")
    .data([0])
    .join("g")
    .attr("class", "xaxis-g-top")
    .attr("transform", () => `translate(${margins.l},${margins.t})`)
    .call(xAxisTop);

  svg
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
    .tickSizeOuter(5)
    .tickFormat(d3.format(".2f"))
    .tickSizeOuter(0);

  let yAxisRight = d3
    .axisLeft()
    .scale(yScale)
    .ticks(0)
    .tickFormat(d3.format(".2f"))
    .tickSizeOuter(0);

  svg
    .selectAll(".yaxis-g-left")
    .data([0])
    .join("g")
    .attr("class", "yaxis-g-left")
    .attr("transform", () => `translate(${margins.l},${margins.t})`)
    .transition()
    .duration(transition_duration)
    .call(yAxisLeft);

  svg
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
};

export { makeAxes };
