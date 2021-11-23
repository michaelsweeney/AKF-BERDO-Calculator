const createDimensions = (node, margins, windowprops) => {
  // calculate dimensions
  const containerdims = {
    width: node
      ? node.getBoundingClientRect()["width"]
      : windowprops.dims.width - 400,
    height: node
      ? node.getBoundingClientRect()["height"]
      : windowprops.dims.height - 225,
  };

  let chartdims = {
    width: containerdims.width - margins.l - margins.r,
    height: containerdims.height - margins.t - margins.b,
  };

  return { containerdims, chartdims };
};

export { createDimensions };
