import { emissions_standards } from "./emissionsstandards";
import { sum, max } from "d3";
import {
  electric_emissions_factors_by_year,
  non_electric_emissions_factors,
  years,
} from "./emissionsfactors";

import {
  convertMMBtuToNative,
  convertNativeToMMBtu,
} from "../calculations/unitconversions";

const getEmissionsThresholds = (areas) => {
  let absolute = {
    "2025-2029": 0,
    "2030-2034": 0,
    "2035-2039": 0,
    "2040-2044": 0,
    "2045-2049": 0,
    "2050-": 0,
  };

  let normalized = {
    "2025-2029": 0,
    "2030-2034": 0,
    "2035-2039": 0,
    "2040-2044": 0,
    "2045-2049": 0,
    "2050-": 0,
  };

  let total_area = sum(areas.map((e) => e.area));

  areas.forEach((e) => {
    let area_absolute = e.area;
    let area_fraction = area_absolute / total_area;

    let thresholds = emissions_standards[e.type];

    absolute["2025-2029"] += area_absolute * thresholds[0];
    absolute["2030-2034"] += area_absolute * thresholds[1];
    absolute["2035-2039"] += area_absolute * thresholds[2];
    absolute["2040-2044"] += area_absolute * thresholds[3];
    absolute["2045-2049"] += area_absolute * thresholds[4];
    absolute["2050-"] += area_absolute * thresholds[5];

    normalized["2025-2029"] += area_fraction * thresholds[0];
    normalized["2030-2034"] += area_fraction * thresholds[1];
    normalized["2035-2039"] += area_fraction * thresholds[2];
    normalized["2040-2044"] += area_fraction * thresholds[3];
    normalized["2045-2049"] += area_fraction * thresholds[4];
    normalized["2050-"] += area_fraction * thresholds[5];
  });
  return { absolute, normalized };
};

const getEmissionsFactorsByYear = (year) => {
  return {
    ...non_electric_emissions_factors,
    elec_grid: electric_emissions_factors_by_year[year],
    elec_pv: electric_emissions_factors_by_year[year],
  };
};

const getEmissionsFromConsumption = (
  consumption,
  onsite_generation,
  factors,
  buildingarea
) => {
  const absolute = { total: 0 };
  const normalized = { total: 0 };

  Object.keys(consumption).forEach((k) => {
    const fuel_factor = factors[k];
    const fuel_consumption = consumption[k];
    const fuel_emission = fuel_consumption * fuel_factor;
    absolute[k] = fuel_emission;

    normalized[k] = fuel_emission / buildingarea;
    absolute["total"] += fuel_emission;
    normalized["total"] += fuel_emission / buildingarea;
  });

  Object.keys(onsite_generation).forEach((k) => {
    const fuel_factor = factors[k];
    const fuel_consumption = onsite_generation[k];
    const fuel_emission = fuel_consumption * fuel_factor;
    absolute[k] = fuel_emission;

    normalized[k] = fuel_emission / buildingarea;

    absolute["total"] += fuel_emission;
    normalized["total"] += fuel_emission / buildingarea;
  });

  // set any negative values to zero to account for potential net positive energy
  // might be hacky or inelegant.

  absolute["total"] = max([0, absolute["total"]]);
  normalized["total"] = max([0, normalized["total"]]);

  return { absolute, normalized };
};

const getAnnualEmissions = (
  years,
  consumption,
  onsite_generation,
  buildingarea
) => {
  const annual_emissions_array = years.map((year) => {
    const factors = getEmissionsFactorsByYear(year);
    const emissions = getEmissionsFromConsumption(
      consumption,
      onsite_generation,
      factors,
      buildingarea
    );

    emissions["year"] = year;
    return emissions;
  });

  return annual_emissions_array;
};

const compileBuildingProfile = (buildinginputs) => {
  let { areas, consumption_native, onsite_generation_native } = buildinginputs;

  let totalarea = sum(areas.map((e) => e.area));

  let building_validation = {
    is_above_35000_sf: totalarea >= 35000 ? true : false,
    is_above_20000_sf: totalarea >= 20000 ? true : false,
  };

  let consumption_mmbtu = {};
  Object.keys(consumption_native).map((fuel) => {
    let val = consumption_native[fuel];
    consumption_mmbtu[fuel] = convertNativeToMMBtu(val, fuel);
  });

  let onsite_generation_mmbtu = {};
  Object.keys(onsite_generation_native).map((fuel) => {
    let val = onsite_generation_native[fuel];
    onsite_generation_mmbtu[fuel] = -convertNativeToMMBtu(val, fuel);
  });

  let annual_emissions = getAnnualEmissions(
    years,
    consumption_mmbtu,
    onsite_generation_mmbtu,
    totalarea
  );

  let emissions_thresholds = getEmissionsThresholds(areas);

  return {
    building_validation: building_validation,
    annual_emissions: annual_emissions,
    emissions_thresholds: emissions_thresholds,
  };
};

export { compileBuildingProfile };
