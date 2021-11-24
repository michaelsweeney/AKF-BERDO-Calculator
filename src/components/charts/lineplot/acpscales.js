import * as d3 from "d3";
const createACPScales = (config) => {
  const { chartdims, data, domain_padding } = config;

  let xACPScale = d3
    .scaleTime()
    .range([0, chartdims.width])
    .domain([2018, 2051]);

  let acp_carbon_extent_high = d3.extent(
    data,
    (d) => d["carbon_deficit_normalized"]
  );
  let acp_carbon_extent_low = d3.extent(
    data,
    (d) => -d["carbon_surplus_normalized"]
  );

  console.log(acp_carbon_extent_high, acp_carbon_extent_low);

  let acp_carbon_extent = [acp_carbon_extent_low[0], acp_carbon_extent_high[1]];

  let acp_payment_extent_high = d3.extent(data, (d) => d["payment_avoidance"]);
  let acp_payment_extent_low = d3.extent(data, (d) => -d["acp_payment"]);
  let acp_payment_extent = [
    acp_payment_extent_low[0] * domain_padding,
    acp_payment_extent_high[1] * domain_padding,
  ];
  console.log(acp_payment_extent_high, acp_payment_extent_low);
  let yACPScaleLeft = d3
    .scaleLinear()
    .range([chartdims.height, 0])
    .domain(acp_carbon_extent);

  let yACPScaleRight = d3
    .scaleLinear()
    .range([chartdims.height, 0])
    .domain(acp_payment_extent);

  return { xACPScale, yACPScaleLeft, yACPScaleRight };
};

export { createACPScales };
