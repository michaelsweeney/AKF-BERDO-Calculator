



const createLegend = (config) => {


    // const colors = {
    //     bottomFill: "rgba(0,0,0,0)",
    //     topFill: "rgba(0,0,0,0)",
    //     middleFill: "rgba(220,0,0,0.75)",
    //     emissionsLineStroke: "rgba(0,220,220,1)",
    //     emissionsCircleFill: "rgba(0,220,220,1)",
    //     emissionsCircleStroke: 'rgba(0,0,0,1)',
    //     thresholdCircleFillOn: 'rgba(220,0,0,1)',
    //     thresholdCircleStrokeOn: 'rgba(0,0,0,1)',
    //     thresholdCircleFillOff: 'rgba(150,150,150,1)',
    //     thresholdCircleStrokeOff: 'rgba(0,0,0,1)',
    //   };

    const { element, colors } = config;


    const legend_items = [
        {
            'color': colors.emissionsLineStroke,
            'objectType': 'line',
            'text': 'CEI Over Time as grid efficiency improves',
        },
        {
            'color': colors.emissionsLineStroke,
            'objectType': 'circle',
            'text': 'CEI at present day grid efficiency',
        },
        {
            'color': colors.thresholdCircleFillOff,
            'objectType': 'circle',
            'text': 'CEI Threshold (met)',
        },
        {
            'color': colors.thresholdCircleFillOff,
            'objectType': 'circle',
            'text': 'CEI Threshold (unmet)',
        },
        {
            'color': colors.thresholdCircleFillOn,
            'objectType': 'circle',
            'text': 'CEI Threshold (unmet)',
        },
        {
            'color': colors.middleFill,
            'objectType': 'rect',
            'text': 'Difference between building CEI and unmet threshold',
        },
    ]


    let color_array = Object.values(colors)

    element
        .selectAll('.legend-rect')
        .data(color_array)
        .join('rect')
        .attr('class', 'legend-rect')
        .attr('width', 50)
        .attr('height', 50)
        .attr('x', (d, i) => i * 60)
        .attr('y', 50)
        .attr('fill', (d) => d)
}


export { createLegend }