import * as d3 from "d3";

const createSvgGroups = (config) => {
  const { containerdims, margins, node, chartdims } = config;

  // create containers
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
    .attr("class", "axis-g");

  let legend_g = svg
    .selectAll(".legend-g")
    .data([0])
    .join("g")
    .attr("class", "legend-g")
    .attr("transform", `translate(${0}, ${margins.t + chartdims.height + 50})`);
  let annotation_g = svg
    .selectAll(".annotation-g")
    .data([0])
    .join("g")
    .attr("class", "annotation-g")
    .attr("transform", `translate(${margins.l}, ${margins.t})`);
  let plot_g = svg
    .selectAll(".plot-g")
    .data([0])
    .join("g")
    .attr("class", "plot-g")
    .attr("transform", `translate(${margins.l}, ${margins.t})`);

  return { svg, plot_g, annotation_g, legend_g, axis_g };
};

export { createSvgGroups };
