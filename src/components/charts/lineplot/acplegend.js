const createACPLegend = (config) => {
  const { element, margins, chartdims } = config;

  let acp_legend_g = element
    .selectAll(".acp-legend-g")
    .data([0])
    .join("g")
    .attr("class", "acp-legend-g");

  return acp_legend_g;
};

export { createACPLegend };
