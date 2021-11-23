import * as d3 from "d3";

const createThresholdAnnotations = (config) => {
  const {
    element,
    data,
    transition_duration,
    xScale,
    yScale,
    textColorOn,
    textColorOff,
    lineColorOn,
    lineColorOff,
  } = config;

  let threshold_annotations = element
    .selectAll(".threshold-annotation")
    .data(data)
    .join("text")
    .attr("class", "threshold-annotation")
    .transition()
    .duration(transition_duration)
    .attr("x", xScale(2051) + 15)
    .attr("y", (d) => (d.val !== null ? yScale(d.val) + 5 : 0))
    .text((d) => `${d.period} es: ${d3.format(".2f")(d.val)}`)
    .style("fill", (d) => (d.threshold_met ? textColorOff : textColorOn))
    .style("font-size", "1.0em");

  let threshold_lines = element
    .selectAll(".thresh-line")
    .data(data)
    .join("line")
    .attr("class", "thresh-line")
    .transition()
    .duration(transition_duration)
    .attr("x1", (d) => xScale(d.starting_year) + 5)
    .attr("x2", (d) => xScale(2051))
    .attr("y1", (d) => yScale(d.val))
    .attr("y2", (d) => yScale(d.val))
    .attr("stroke-dasharray", "2 0 2")
    .style("stroke", (d) => (d.threshold_met ? lineColorOff : lineColorOn));

  return { threshold_annotations, threshold_lines };
};

export { createThresholdAnnotations };
