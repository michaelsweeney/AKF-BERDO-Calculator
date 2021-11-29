const createACPLegend = (config) => {
  const { element, colors } = config;

  let rowspacing = [25, 50, 75, 100];
  let colspacing = [0, 350];
  let paddingLeft = 100;
  let textAlignLeft = 35;
  let textAlignLeftLong = 40;

  let rect_position_left = 10;
  let rect_position_top = -5;

  let acp_legend_g = element
    .selectAll(".acp-legend-g")
    .data([0])
    .join("g")
    .attr("class", "acp-legend-g");

  let today_es_g = acp_legend_g
    .selectAll(".today-es-g")
    .data([0])
    .join("g")
    .attr("class", "today-es-g")
    .attr(
      "transform",
      `translate(${colspacing[0] + paddingLeft},${rowspacing[0]})`
    );
  today_es_g
    .selectAll(".today-es-circle")
    .data([0])
    .join("circle")
    .attr("class", "today-es-circle")
    .attr("cx", 15)
    .attr("cy", 0)
    .attr("r", 5)
    .attr("stroke", colors.emissionsCircleStroke)
    .attr("fill", colors.emissionsCircleFill);

  today_es_g
    .selectAll(".today-es-text")
    .data([0])
    .join("text")
    .attr("class", "today-es-text")
    .text("es at present day")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  let emissions_line_g = acp_legend_g
    .selectAll(".emissions-line-g")
    .data([0])
    .join("g")
    .attr("class", "emissions-line-g")
    .attr(
      "transform",
      `translate(${colspacing[1] + paddingLeft},${rowspacing[0]})`
    );

  emissions_line_g
    .selectAll(".legend-emissions-line-stroke")
    .data([0])
    .join("line")
    .attr("class", "legend-emissions-line-stroke")
    .attr("x0", 0)
    .attr("x1", 30)
    .attr("y0", 0)
    .attr("y1", 1)
    .attr("stroke-width", 2)
    .attr("stroke", colors.emissionsLineStroke);

  emissions_line_g
    .selectAll(".legend-emissions-line-text")
    .data([0])
    .join("text")
    .attr("class", "legend-emissions-line-text")
    .text("es over time")
    .attr("x", textAlignLeftLong)
    .attr("y", 5);

  let positive_bar_g = acp_legend_g
    .selectAll(".positive-bar-g")
    .data([0])
    .join("g")
    .attr("class", "positive-bar-g")
    .attr(
      "transform",
      `translate(${colspacing[0] + paddingLeft},${rowspacing[1]})`
    );

  positive_bar_g
    .selectAll(".positive-bar-rect")
    .data([0])
    .join("rect")
    .attr("class", "positive-bar-rect")
    .attr("x", rect_position_left)
    .attr("y", rect_position_top)
    .attr("height", 10)
    .attr("width", 10)
    .style("stroke", "black")
    .style("fill", colors.paymentAvoidanceBars);

  positive_bar_g
    .selectAll(".positive-bar-text")
    .data([0])
    .join("text")
    .attr("class", "positive-bar-text")
    .text("ACP Avoidance / es below threshold")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  let negative_bar_g = acp_legend_g
    .selectAll(".negative-bar-g")
    .data([0])
    .join("g")
    .attr("class", "negative-bar-g")
    .attr(
      "transform",
      `translate(${colspacing[0] + paddingLeft},${rowspacing[2]})`
    );

  negative_bar_g
    .selectAll(".negative-bar-rect")
    .data([0])
    .join("rect")
    .attr("class", "negative-bar-rect")
    .attr("x", rect_position_left)
    .attr("y", rect_position_top)
    .attr("height", 10)
    .attr("width", 10)
    .style("stroke", "black")
    .style("fill", colors.paymentBars);

  negative_bar_g
    .selectAll(".negative-bar-text")
    .data([0])
    .join("text")
    .attr("class", "negative-bar-text")
    .text("ACP Payment / es above threshold")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  return acp_legend_g;
};

export { createACPLegend };
