const createLegend = (config) => {
  const { element, colors } = config;

  let rowspacing = [25, 50, 75, 100];
  let colspacing = [0, 250];
  let paddingLeft = 100;
  let textAlignLeft = 50;

  let today_cei_g = element
    .selectAll(".today-cei-g")
    .data([0])
    .join("g")
    .attr("class", "today-cei-g")
    .attr(
      "transform",
      `translate(${colspacing[0] + paddingLeft},${rowspacing[0]})`
    );
  today_cei_g
    .selectAll(".today-cei-circle")
    .data([0])
    .join("circle")
    .attr("class", "today-cei-circle")
    .attr("cx", 15)
    .attr("cy", 0)
    .attr("r", 5)
    .attr("stroke", colors.emissionsCircleStroke)
    .attr("fill", colors.emissionsCircleFill);
  today_cei_g
    .selectAll(".today-cei-text")
    .data([0])
    .join("text")
    .attr("class", "today-cei-text")
    .text("CEI at Present-Day")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  let threshold_met_g = element
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
    .text("CEI Threshold (met)")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  let threshold_unmet_g = element
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
    .text("CEI Threshold (unmet)")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  let legend_emissions_g = element
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
    .text("CEI Over Time")
    .attr("x", textAlignLeft)
    .attr("y", 5);

  let legend_area_g = element
    .selectAll(".legend-area-g")
    .data([0])
    .join("g")
    .attr("class", "legend-area-g")
    .attr(
      "transform",
      `translate(${colspacing[1] + paddingLeft},${rowspacing[1]})`
    );
  legend_area_g
    .selectAll(".legend-area-rect")
    .data([0])
    .join("rect")
    .attr("class", "legend-area-rect")
    .attr("x", 0)
    .attr("y", -7)
    .attr("width", 30)
    .attr("height", 10)
    .attr("stroke", "black")
    .attr("fill", colors.middleFill);
  legend_area_g
    .selectAll(".legend-area-text")
    .data([0])
    .join("text")
    .attr("class", "legend-area-text")
    .text("CEI deficit")
    .attr("x", textAlignLeft)
    .attr("y", 5);
};

export { createLegend };
