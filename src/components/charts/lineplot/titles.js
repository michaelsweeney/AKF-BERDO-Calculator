const addTitles = (props) => {
  const { annotation_g, margins, chartdims } = props;
  annotation_g
    .selectAll(".y-axis-title")
    .data([0])
    .join("text")
    .attr("class", "y-axis-title")
    .attr("transform", "rotate(270)")
    .attr("x", -(margins.t + chartdims.height) / 2 - 150)
    .attr("y", margins.l / 2 - 15)
    .text("Carbon Emission Intensity (kgCO2e/sf/yr)")
    .style("font-size", "1em");

  annotation_g
    .selectAll(".x-axis-title")
    .data([0])
    .join("text")
    .attr("class", "x-axis-title")
    .attr("x", (margins.l + chartdims.width) / 2)
    .attr("y", margins.t + chartdims.height + 40)

    .text("Year")
    .style("font-size", "1em");

  annotation_g
    .selectAll(".chart-title")
    .data([0])
    .join("text")
    .attr("class", "chart-title")
    .attr("x", (margins.l + chartdims.width) / 2 - 50)
    .attr("y", margins.t - 20)
    .text("CEI Threshold Summary")
    .style("font-size", "1.25em");
};

export { addTitles };
