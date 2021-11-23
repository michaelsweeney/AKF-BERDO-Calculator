import * as d3 from "d3";
const createACPScales = (config) => {
  const { chartdims, data, domain_padding } = config;

  let xACPScale = d3
    .scaleTime()
    .range([0, chartdims.width])
    .domain([2018, 2051]);

  let acp_extent_high = d3.extent(data, (d) => d["acp_payment"]);
  let acp_extent_low = d3.extent(data, (d) => d["payment_avoidance"]);
  let acp_extent = [acp_extent_low[0], acp_extent_high[1]];

  let yACPScaleLeft = d3
    .scaleLinear()
    .range([chartdims.height, 0])
    .domain(acp_extent);

  let yACPScaleRight = d3
    .scaleLinear()
    .range([chartdims.height, 0])
    .domain(d3.extent(data, (d) => d["carbon_deficit"]));

  return { xACPScale, yACPScaleLeft, yACPScaleRight };
};

export { createACPScales };
