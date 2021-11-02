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
  const { xScale, yScale, duration, fill, data, element } = config;

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
    clipPath,
    stroke,
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

const createClipArea = (config) => {
  const { xScale, yScale, clipId, data, chartdims, element } = config;
  let clipAreaGen = d3
    .area()
    .x((d) => xScale(d.year))
    .y0((d) => chartdims.height)
    .y1((d) => yScale(d.val));

  let clip_element = element
    .selectAll(".clip-area-element")
    .data([0])
    .join("clipPath")
    .attr("class", "clip-area-element")
    .attr("id", clipId);

  clip_element.selectAll(".clip-area-path").attr("opacity", 0);

  clip_element
    .selectAll(".clip-area-path")
    .data([data])
    .join("path")
    .attr("class", "clip-area-path")
    .attr("d", clipAreaGen)
    .attr("fill", "black")
    .attr("opacity", 1);
};

export { createTopArea, createBottomArea, createMiddleArea, createClipArea };
