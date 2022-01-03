import { getThresholdArray } from "./thresholdarray";

import { calcAreas } from "./thresholdareacalcs";

const createDataArrays = (thresholds_raw, emissions_raw) => {
  // process data. handle any missing values due
  // to area regulations here.

  let emissions = emissions_raw.map((e) => {
    return { year: e.year, val: e.normalized.total };
  });

  let emissions_simple =
    emissions.length > 30
      ? [emissions.slice(0)[0], emissions.slice(-2)[0], emissions.slice(-1)[0]]
      : emissions;

  let thresholds = getThresholdArray(thresholds_raw.normalized, emissions);

  let areaArrays = calcAreas(thresholds, emissions);

  return { emissions, emissions_simple, thresholds, areaArrays };
};

export { createDataArrays };
