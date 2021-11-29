import * as d3 from "d3";

const createThresholdScales = (config) => {
  let { emissions, thresholds, domain_padding, chartdims } = config;

  // create scales
  let xThresholdScale = d3
    .scaleLinear()
    .domain([2021, 2051])
    .range([0, chartdims.width]);

  let yThresholdScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max([
        ...emissions.map((e) => e.val),
        ...thresholds.map((e) => e.val),
      ]) * domain_padding,
    ])
    .range([chartdims.height, 0]);

  return { xThresholdScale, yThresholdScale };
};

export { createThresholdScales };
