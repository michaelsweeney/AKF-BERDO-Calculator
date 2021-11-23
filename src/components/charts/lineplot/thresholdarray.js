const getThresholdArray = (thresholds, emissions) => {
  let domain_map = {
    "2025-2029": 2025,
    "2030-2034": 2030,
    "2035-2039": 2035,
    "2040-2044": 2040,
    "2045-2049": 2045,
    "2050-": 2050,
  };

  const getThresholdsMet = (e) => {
    let emission_period = emissions.filter((f) => +f.year === domain_map[e])[0];
    if (emission_period) {
      if (emission_period.val < thresholds[e]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  thresholds = Object.keys(thresholds).map((e) => {
    return {
      period: e,
      val: thresholds[e],
      starting_year: domain_map[e],
      threshold_met: getThresholdsMet(e),
    };
  });

  if (!thresholds[0].val) {
    thresholds.shift();
  }

  return thresholds;
};

export { getThresholdArray };
