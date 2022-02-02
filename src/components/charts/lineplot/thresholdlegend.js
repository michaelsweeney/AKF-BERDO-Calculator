const createThresholdLegend = (config) => {
  const { element, colors } = config;

  let rowspacing = [15, 35, 55, 75, 95];
  let colspacing = [0, 250];
  let paddingLeft = 100;
  let textAlignLeft = 35;
  let textAlignLeftLong = 40;

  let textSize = "0.75em";

  let threshold_legend_g = element
    .selectAll(".threshold-legend-g")
    .data([0])
    .join("g")
    .attr("class", "threshold-legend-g");

  let today_es_g = threshold_legend_g
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
    .attr("font-size", textSize)
    .text("present-day emissions")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  let threshold_met_g = threshold_legend_g
    .selectAll(".threshold-met-g")
    .data([0])
    .join("g")
    .attr("class", "threshold-met-g")
    .attr(
      "transform",
      `translate(${colspacing[0] + paddingLeft},${rowspacing[1]})`
    );
  threshold_met_g
    .selectAll(".threshold-met-circle")
    .data([0])
    .join("circle")
    .attr("class", "threshold-met-circle")
    .attr("cx", 15)
    .attr("cy", 0)
    .attr("r", 5)
    .attr("stroke", colors.thresholdCircleStrokeOff)
    .attr("fill", colors.thresholdCircleFillOff);
  threshold_met_g
    .selectAll(".threshold-met-text")
    .data([0])
    .join("text")
    .attr("class", "threshold-met-text")
    .attr("font-size", textSize)
    .text("es threshold (met)")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  let threshold_unmet_g = threshold_legend_g
    .selectAll(".threshold-unmet-g")
    .data([0])
    .join("g")
    .attr("class", "threshold-unmet-g")
    .attr(
      "transform",
      `translate(${colspacing[0] + paddingLeft},${rowspacing[2]})`
    );
  threshold_unmet_g
    .selectAll(".threshold-unmet-circle")
    .data([0])
    .join("circle")
    .attr("class", "threshold-unmet-circle")
    .attr("cx", 15)
    .attr("cy", 0)
    .attr("r", 5)
    .attr("stroke", colors.thresholdCircleStrokeOn)
    .attr("fill", colors.thresholdCircleFillOn);
  threshold_unmet_g
    .selectAll(".threshold-unmet-text")
    .data([0])
    .join("text")
    .attr("class", "threshold-unmet-text")
    .attr("font-size", textSize)

    .text("es threshold (unmet)")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  let legend_emissions_g = threshold_legend_g
    .selectAll(".legend-emissions-g")
    .data([0])
    .join("g")
    .attr("class", "legend-emissions-g")
    .attr(
      "transform",
      `translate(${colspacing[1] + paddingLeft},${rowspacing[0]})`
    );
  legend_emissions_g
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

  legend_emissions_g
    .selectAll(".legend-emissions-line-text")
    .data([0])
    .join("text")
    .attr("class", "legend-emissions-line-text")
    .attr("font-size", textSize)

    .text("emissions over time")
    .attr("x", textAlignLeftLong)
    .attr("y", 5);

  let legend_area_unmet_g = threshold_legend_g
    .selectAll(".legend-area-unmet-g")
    .data([0])
    .join("g")
    .attr("class", "legend-area-unmet-g")
    .attr(
      "transform",
      `translate(${colspacing[1] + paddingLeft},${rowspacing[1]})`
    );
  legend_area_unmet_g
    .selectAll(".legend-area-unmet-rect")
    .data([0])
    .join("rect")
    .attr("class", "legend-area-unmet-rect")
    .attr("x", 0)
    .attr("y", -7)
    .attr("width", 30)
    .attr("height", 10)
    .attr("stroke", "black")
    .attr("fill", colors.middleFill);
  legend_area_unmet_g
    .selectAll(".legend-area-unmet-text")
    .data([0])
    .join("text")
    .attr("class", "legend-area-unmet-text")
    .attr("font-size", textSize)
    .text("emissions above threshold")
    .attr("x", textAlignLeftLong)
    .attr("y", 5);

  let legend_area_met_g = threshold_legend_g
    .selectAll(".legend-area-met-g")
    .data([0])
    .join("g")
    .attr("class", "legend-area-met-g")
    .attr(
      "transform",
      `translate(${colspacing[1] + paddingLeft},${rowspacing[2]})`
    );
  legend_area_met_g
    .selectAll(".legend-area-met-rect")
    .data([0])
    .join("rect")
    .attr("class", "legend-area-met-rect")
    .attr("x", 0)
    .attr("y", -7)
    .attr("width", 30)
    .attr("height", 10)
    .attr("stroke", "black")
    .attr("fill", colors.bottomFill);

  legend_area_met_g
    .selectAll(".legend-area-met-text")
    .data([0])
    .join("text")
    .attr("class", "legend-area-met-text")
    .attr("font-size", textSize)
    .text("emissions below threshold")
    .attr("x", textAlignLeftLong)
    .attr("y", 5);

  let es_footnote_g = threshold_legend_g
    .selectAll(".es-footnote-g")
    .data([0])
    .join("g")
    .attr("class", "es-footnote-g")
    .attr(
      "transform",
      `translate(${colspacing[0] + 10 + paddingLeft},${rowspacing[3] + 10})`
    );
  es_footnote_g
    .selectAll(".es-footnote-text")
    .data([0])
    .join("text")
    .attr("class", "es-footnote-g")
    .attr("font-size", textSize)
    .attr("font-style", "italic")
    .text(
      "* Emissions Standard (es) includes projected electric grid decarbonization"
    );

  return threshold_legend_g;
};

export { createThresholdLegend };
