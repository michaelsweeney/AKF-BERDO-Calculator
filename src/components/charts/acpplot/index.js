import { conn } from "../../../store/connect";

import * as d3 from "d3";

import { useRef, useEffect } from "react";
// import { createDimensions } from "./dimensions";
// import { createSvgGroups } from "./svggroups";

const ACPPlot = (props) => {
  const container = useRef(null);

  useEffect(() => {
    createChart();
  });

  const createChart = () => {
    // let node = container.current;
    // let margins = {
    //   t: 50,
    //   b: 175,
    //   r: 200,
    //   l: 100,
    // };
    // let { containerdims, chartdims } = createDimensions(
    //   node,
    //   margins,
    //   props.window
    // );
    // let colorTableau = d3.schemeTableau10;
    // let { svg, plot_g, annotation_g, legend_g, axis_g } = createSvgGroups({
    //   containerdims: containerdims,
    //   chartdims: chartdims,
    //   margins: margins,
    //   node: node,
    // });
  };

  // const createAxes = (config) => {};

  // createAxes({});

  return <div ref={container}></div>;
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(ACPPlot);
