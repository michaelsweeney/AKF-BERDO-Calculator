const createTitles = (props) => {
  const { element, margins, chartdims } = props;
  element
    .selectAll(".y-axis-title")
    .data([0])
    .join("text")
    .attr("class", "y-axis-title")
    .attr("transform", "rotate(270)")
    .attr("x", -(margins.t + chartdims.height) / 2 - 150)
    .attr("y", margins.l / 2 - 15)
    .text("Carbon Emission Intensity (kgCO2e/sf/yr)")
    .style("font-size", "1em");

  element
    .selectAll(".x-axis-title")
    .data([0])
    .join("text")
    .attr("class", "x-axis-title")
    .attr("x", (margins.l + chartdims.width) / 2)
    .attr("y", margins.t + chartdims.height + 40)

    .text("Year")
    .style("font-size", "1em");

  element
    .selectAll(".chart-title")
    .data([0])
    .join("text")
    .attr("class", "chart-title")
    .attr("x", (margins.l + chartdims.width) / 2 - 50)
    .attr("y", margins.t - 20)
    .text("CEI Threshold Summary")
    .style("font-size", "1.25em");
};

export { createTitles };
