const createTitles = (props) => {
  const { element, margins, chartdims } = props;
  element
    .selectAll(".y-axis-title")
    .data([0])
    .join("text")
    .attr("class", "y-axis-title")
    .attr("transform", "rotate(270)")
    .attr("x", -(margins.t + chartdims.height / 2))
    .attr("y", margins.l / 2 - 15)
    .attr("text-anchor", "middle")
    .text("CEI (kgCO2e/sf/yr)")
    .style("font-size", "1em");

  element
    .selectAll(".x-axis-title")
    .data([0])
    .join("text")
    .attr("class", "x-axis-title")
    .attr("x", margins.l + chartdims.width / 2)
    .attr("y", margins.t + chartdims.height + 40)
    .attr("text-anchor", "middle")
    .text("Year")
    .style("font-size", "1em");

  element
    .selectAll(".chart-title")
    .data([0])
    .join("text")
    .attr("class", "chart-title")
    .attr("x", margins.l + chartdims.width / 2)
    .attr("y", margins.t - 20)
    .attr("text-anchor", "middle")
    .text("CEI Threshold Summary")
    .style("font-size", "1.25em");
};

export { createTitles };
