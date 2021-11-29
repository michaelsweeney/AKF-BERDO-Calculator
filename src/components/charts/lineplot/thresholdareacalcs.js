const calcAreas = (thresholds, emissions) => {
  let is_2025_fine = thresholds[0].period == "2025-2029" ? true : false;

  let periods = is_2025_fine
    ? [2021, 2025, 2030, 2035, 2040, 2045, 2050, 2051]
    : [2021, 2030, 2035, 2040, 2045, 2050, 2051];

  let combined_array = periods.map((d) => {
    return {
      year: d,
      emission_val: emissions.filter((f) => +f.year === d)[0]
        ? emissions.filter((f) => +f.year === d)[0].val
        : 0,
      thresh_val: thresholds.filter((f) => +f.starting_year === d)[0]
        ? thresholds.filter((f) => +f.starting_year === d)[0].val
        : 0,
      thresh_met: thresholds.filter((f) => +f.starting_year === d)[0]
        ? thresholds.filter((f) => +f.starting_year === d)[0].threshold_met
        : false,
    };
  });

  let combined_top = is_2025_fine
    ? [
        combined_array[1],
        combined_array[2],
        combined_array[3],
        combined_array[4],
        combined_array[5],
        combined_array[6],
        combined_array[7],
      ]
    : [
        combined_array[1],
        combined_array[2],
        combined_array[3],
        combined_array[4],
        combined_array[5],
        combined_array[6],
      ];

  let combined_bottom = is_2025_fine
    ? [
        combined_array[0],
        combined_array[1],
        combined_array[2],
        combined_array[3],
        combined_array[4],
        combined_array[5],
        combined_array[6],
        combined_array[7],
      ]
    : [
        combined_array[0],
        combined_array[1],
        combined_array[2],
        combined_array[3],
        combined_array[4],
        combined_array[5],
        combined_array[6],
      ];

  let top = combined_top.map((d) => {
    return {
      val: d.thresh_val, // d3.max([d.thresh_val, d.emission_val]),
      year: d.year,
      thresh_met: d.thresh_met,
    };
  });
  let middleFilter = combined_top.filter((d) => d.thresh_met === false);

  let middle = [];

  middle.push({
    val: middleFilter[0].emission_val,
    year: middleFilter[0].year,
  });

  middleFilter.forEach((d, i) => {
    middle.push({
      val: d.thresh_val,
      year: d.year,
    });
    if (middleFilter[i + 1]) {
      middle.push({
        val: d.thresh_val,
        year: middleFilter[i + 1].year,
      });
    }
  });

  middle.push({
    val: middleFilter[middleFilter.length - 1].emission_val,
    year: middleFilter[middleFilter.length - 1].year,
  });
  middle.push({
    val: middleFilter[0].emission_val,
    year: middleFilter[0].year,
  });

  let bottom = combined_bottom.map((d) => {
    return {
      val: d.emission_val,
      year: d.year,
    };
  });

  top = [
    {
      val: top[0] ? top[0].val : 0,
      year: top[0] ? top[0].year : 0,
    },

    {
      val: top[0] ? top[0].val : 0,
      year: top[1] ? top[1].year : 0,
    },
    {
      val: top[1] ? top[1].val : 0,
      year: top[1] ? top[1].year : 0,
    },
    {
      val: top[1] ? top[1].val : 0,
      year: top[2] ? top[2].year : 0,
    },
    {
      val: top[2] ? top[2].val : 0,
      year: top[2] ? top[2].year : 0,
    },
    {
      val: top[2] ? top[2].val : 0,
      year: top[3] ? top[3].year : 0,
    },
    {
      val: top[3] ? top[3].val : 0,
      year: top[3] ? top[3].year : 0,
    },
    {
      val: top[3] ? top[3].val : 0,
      year: top[4] ? top[4].year : 0,
    },
    {
      val: top[4] ? top[4].val : 0,
      year: top[4] ? top[4].year : 0,
    },
    {
      val: top[4] ? top[4].val : 0,
      year: top[5] ? top[5].year : 0,
    },
    {
      val: top[5] ? top[5].val : 0,
      year: top[5] ? top[5].year : 0,
    },
    {
      val: top[5] ? top[5].val : 0,
      year: top[6] ? top[6].year : 0,
    },
  ];

  return { top, middle, bottom };
};

export { calcAreas };
