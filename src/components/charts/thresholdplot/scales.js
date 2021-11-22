import * as d3 from 'd3'

const createScales = (config) => {

    let { emissions, thresholds, domain_padding, chartdims } = config;


    // create scales
    let xScale = d3
        .scaleLinear()
        .domain([2018, 2050])
        .range([0, chartdims.width]);

    let yScale = d3
        .scaleLinear()
        .domain([
            0,
            d3.max([
                ...emissions.map((e) => e.val),
                ...thresholds.map((e) => e.val),
            ]) * domain_padding,
        ])
        .range([chartdims.height, 0]);

    return { xScale, yScale }

}

export { createScales }