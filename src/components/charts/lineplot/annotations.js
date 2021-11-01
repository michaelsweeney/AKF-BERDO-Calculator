
import * as d3 from 'd3'

const createEmissionAnnotations = (config) => {

    const { element, data, transition_duration, xScale, yScale } = config

    element
        .selectAll(".threshold-annotation")
        .data(data)
        .join("text")
        .attr("class", "threshold-annotation")
        .transition()
        .duration(transition_duration)
        .attr("x", xScale(2050) + 25)
        .attr("y", (d) => yScale(d.val))
        .text((d) => `${d.period}: ${d3.format(".2f")(d.val)} kgCO2e/sf/yr`)
        .style("fill", (d) => (d.threshold_met ? "black" : "red"))
        .style("font-size", "1em");

    element
        .selectAll(".thresh-line")
        .data(data)
        .join("line")
        .attr("class", "thresh-line")
        .transition()
        .duration(transition_duration)
        .attr("x1", (d) => xScale(d.starting_year))
        .attr("x2", (d) => xScale("2050"))
        .attr("y1", (d) => yScale(d.val))
        .attr("y2", (d) => yScale(d.val))
        .attr("stroke-dasharray", "2 0 2")
        .style("stroke", (d) => (d.threshold_met ? "gray" : "red"));
}


export { createEmissionAnnotations }