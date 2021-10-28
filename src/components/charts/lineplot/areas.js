import * as d3 from "d3";

const createBottomArea = (config) => {
  const { xScale, yScale, fill, element, data, duration, chartdims } = config;
  let emissionsAreaGen = d3
    .area()
    .x((d) => xScale(d.year))
    .y0((d) => chartdims.height)
    .y1((d) => yScale(d.val));

  element.selectAll(".bottom-area").attr("opacity", 0);

  element
    .selectAll(".bottom-area")
    .data([data])
    .join("path")
    .attr("class", "bottom-area")
    .attr("d", emissionsAreaGen)
    .transition()
    .duration(duration)
    .attr("fill", fill)
    .attr("opacity", 1);
};

const createTopArea = (config) => {
  const { xScale, yScale, duration, stroke, fill, data, element } = config;

  let threshAreaGen = d3
    .area()
    .x((d) => {
      return xScale(d.year);
    })

    .y0((d) => 0)
    .y1((d) => {
      return yScale(d.val);
    });
  element.selectAll(".top-area").attr("opacity", 0);

  element
    .selectAll(".top-area")
    .data([data])
    .join("path")
    .attr("class", "top-area")
    .attr("d", threshAreaGen)

    .transition()
    .duration(duration)
    .attr("fill", fill)

    .attr("stroke", stroke)
    .attr("opacity", 1);
};

const createMiddleArea = (config) => {
  const {
    xScale,
    yScale,
    transition_duration,
    data,
    element,
    fill,
    stroke,
    clipPath,
  } = config;

  element.selectAll(".middle-area").attr("opacity", 0);

  element
    .selectAll(".middle-area")
    .data([data])
    .join("polygon")
    .attr("class", "middle-area")
    .attr("clip-path", clipPath)
    .attr("points", (d) => {
      return d
        .map((d) => {
          return [xScale(d.year), yScale(d.val)].join(",");
        })
        .join(" ");
    })
    .transition()
    .duration(transition_duration)
    .attr("fill", fill)
    .attr("stroke", stroke)
    .attr("opacity", 1);
};

export { createTopArea, createBottomArea, createMiddleArea };
