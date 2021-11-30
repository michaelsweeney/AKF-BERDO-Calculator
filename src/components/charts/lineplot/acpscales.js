import * as d3 from "d3";
const createACPScales = (config) => {
  const { chartdims, data, domain_padding } = config;

  let xACPScale = d3
    .scaleTime()
    .range([0, chartdims.width])
    .domain([2021, 2051]);

  let carbon_deficit_normalized_max = d3.max(
    data.map((d) => d["carbon_deficit_normalized"])
  );
  // let carbon_surplus_normalized_max = d3.max(
  //   data.map((d) => d["carbon_surplus_normalized"])
  // );
  let acp_payment_max = d3.max(data.map((d) => d["acp_payment"]));
  // let payment_avoidance_max = d3.max(data.map((d) => d["payment_avoidance"]));

  // let acp_max = d3.max([acp_payment_max, payment_avoidance_max]);

  // let carbon_max = d3.max([
  //   carbon_deficit_normalized_max,
  //   carbon_surplus_normalized_max,
  // ]);

  let carbon_domain = [
    0 * domain_padding,
    carbon_deficit_normalized_max * domain_padding,
  ];
  let acp_domain = [0 * domain_padding, acp_payment_max * domain_padding];

  let yACPScaleLeft = d3
    .scaleLinear()
    .range([chartdims.height, 0])
    .domain(carbon_domain);

  let yACPScaleRight = d3
    .scaleLinear()
    .range([chartdims.height, 0])
    .domain(acp_domain);

  return { xACPScale, yACPScaleLeft, yACPScaleRight };
};

export { createACPScales };
