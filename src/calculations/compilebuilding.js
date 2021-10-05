import { emissions_standards } from "./emissionsstandards";
import { sum } from "d3";
import {
  electric_emissions_factors_by_year,
  non_electric_emissions_factors,
} from "./emissionsfactors";

const getEmissionsFactorsByYear = (year) => {
  return {
    ...non_electric_emissions_factors,
    grid_elec: electric_emissions_factors_by_year[year],
  };
};

const getEmissionsFromConsumption = (consumption, factors, buildingarea) => {
  const absolute = { total: 0 };

  const normalized = { total: 0 };

  Object.keys(consumption).forEach((k) => {
    const fuel_factor = factors[k];
    const fuel_consumption = consumption[k];
    const fuel_emission = fuel_consumption * fuel_factor;
    absolute[k] = fuel_emission;

    normalized[k] = fuel_emission / buildingarea;

    absolute["total"] += fuel_emission;

    absolute["total"] += fuel_emission / buildingarea;
  });

  return { absolute, normalized };
};

const getAnnualEmissions = (years, consumption, buildingarea) => {
  const annual_emissions_array = years.map((year) => {
    const factors = getEmissionsFactorsByYear(year);
    const emissions = getEmissionsFromConsumption(
      consumption,
      factors,
      buildingarea
    );
    return emissions;
  });

  return annual_emissions_array;
};

const compileBuildingProfile = (buildinginputs) => {
  /*
   *
   * need to calculsate blended co2e/sf for each year of
   * elec grid rates
   *
   * get emissions standard for each year range
   *
   * return array of objects with keys:
   * - year
   * - co2e/sf/yr
   * - blended standard for year
   *
   */

  const { areas, consumption } = buildinginputs;

  const compiled_building = { areas, consumption };

  const totalarea = sum(Object.values(areas));

  const years = Object.keys(electric_emissions_factors_by_year);

  const annual_emissions_array = getAnnualEmissions(
    years,
    consumption,
    totalarea
  );

  compiled_building.annual_emissions = annual_emissions_array;

  const getEmissionsThresholds = (areas) => {
    const thresholds_absolute = {
      "2025-2029": 0,
      "2030-2034": 0,
      "2035-2039": 0,
      "2040-2044": 0,
      "2045-2049": 0,
      "2050-": 0,
    };

    const thresholds_normalized = {
      "2025-2029": 0,
      "2030-2034": 0,
      "2035-2039": 0,
      "2040-2044": 0,
      "2045-2049": 0,
      "2050-": 0,
    };

    let total_area = sum(Object.values(areas));

    Object.keys(areas).forEach((type) => {
      let area_absolute = areas[type];
      let area_fraction = area_absolute / total_area;
      console.log(area_fraction);

      let thresholds = emissions_standards[type];

      thresholds_absolute["2025-2029"] += area_absolute * thresholds[0];
      thresholds_absolute["2030-2034"] += area_absolute * thresholds[1];
      thresholds_absolute["2035-2039"] += area_absolute * thresholds[2];
      thresholds_absolute["2040-2044"] += area_absolute * thresholds[3];
      thresholds_absolute["2045-2049"] += area_absolute * thresholds[4];
      thresholds_absolute["2050-"] += area_absolute * thresholds[5];

      thresholds_normalized["2025-2029"] += area_fraction * thresholds[0];
      thresholds_normalized["2030-2034"] += area_fraction * thresholds[1];
      thresholds_normalized["2035-2039"] += area_fraction * thresholds[2];
      thresholds_normalized["2040-2044"] += area_fraction * thresholds[3];
      thresholds_normalized["2045-2049"] += area_fraction * thresholds[4];
      thresholds_normalized["2050-"] += area_fraction * thresholds[5];
    });
    return { thresholds_absolute, thresholds_normalized };
  };

  compiled_building.emissions_thresholds = getEmissionsThresholds(areas);
  console.log(compiled_building);
  return compiled_building;
};

export { compileBuildingProfile };
