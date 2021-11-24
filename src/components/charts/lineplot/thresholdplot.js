import * as d3 from "d3";

const createThresholdPoints = (config) => {
  const { data, xScale, yScale, element, colors } = config;
  let threshold_points = element
    .selectAll(".thresh-point")
    .data(data)
    .join("circle")
    .attr("class", "thresh-point")
    .attr("r", 5)
    .attr("cx", (d) => xScale(d.starting_year))
    .attr("cy", (d) => yScale(d.val))
    .attr("stroke", (d) =>
      d.threshold_met
        ? colors.thresholdCircleStrokeOff
        : colors.thresholdCircleStrokeOn
    )
    .style("fill", (d) =>
      d.threshold_met
        ? colors.thresholdCircleFillOff
        : colors.thresholdCircleFillOn
    );

  return threshold_points;
};

const createEmissionsLine = (config) => {
  const { element, data, xScale, yScale, colors } = config;

  element
    .selectAll(".emissions-line")
    .data([0])
    .join("path")
    .attr("class", "emissions-line");

  let emissions_line = element
    .selectAll(".emissions-line")
    .datum(data)
    .join("path")
    .attr("class", "emissions-line")
    .attr("stroke", colors.emissionsLineStroke)
    .attr("stroke-width", 2)
    .attr(
      "d",
      d3
        .line()
        .x((d) => xScale(d.year))
        .y((d) => yScale(d.val))
    )
    .attr("fill", "none");

  let emissions_today_circle = element
    .selectAll(".emissions-today-circle")
    .data(data)
    .join("circle")
    .attr("class", "emissions-today-circle")
    .attr("cx", (d) => xScale(d.year))
    .attr("cy", (d) => yScale(d.val))
    .attr("r", (d, i) => (i === 0 ? 5 : 0))
    .attr("fill", colors.emissionsCircleFill)
    .attr("stroke", colors.emissionsCircleStroke);

  return { emissions_line, emissions_today_circle };
};

export { createEmissionsLine, createThresholdPoints };
