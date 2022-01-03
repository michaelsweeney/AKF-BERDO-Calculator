const createAxisGroups = (config) => {
  const { svg, chartdims, margins } = config;
  // create axes

  let x_axis_top_g = svg
    .selectAll(".xaxis-g-top")
    .data([0])
    .join("g")
    .attr("class", "xaxis-g-top")
    .attr("transform", () => `translate(${margins.l},${margins.t})`);

  let x_axis_bottom_g = svg
    .selectAll(".xaxis-g-bottom")
    .data([0])
    .join("g")
    .attr("class", "xaxis-g-bottom")
    .attr(
      "transform",
      () => `translate(${margins.l},${margins.t + chartdims.height})`
    );

  let y_axis_left_g = svg
    .selectAll(".yaxis-g-left")
    .data([0])
    .join("g")
    .attr("class", "yaxis-g-left")
    .attr("transform", () => `translate(${margins.l},${margins.t})`);

  let y_axis_right_g = svg
    .selectAll(".yaxis-g-right")
    .data([0])
    .join("g")
    .attr("class", "yaxis-g-right")
    .attr(
      "transform",
      () => `translate(${margins.l + chartdims.width},${margins.t})`
    );

  return { x_axis_bottom_g, x_axis_top_g, y_axis_left_g, y_axis_right_g };
};

export { createAxisGroups };
