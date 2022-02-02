import { emissions_standards } from "./emissionsstandards";
import { sum, max } from "d3";
import {
  electric_emissions_factors_by_year,
  non_electric_emissions_factors,
  years,
} from "./emissionsfactors";
import { convertNativeToMMBtu } from "../calculations/unitconversions";

const getAlternativeCompliancePayments = (
  emissions_thresholds,
  annual_emissions,
  building_validation
) => {
  let has_2025_2029_threshold;

  if (!building_validation.is_above_20000_sf) {
    has_2025_2029_threshold = false;
  }

  if (
    building_validation.is_above_20000_sf &&
    !building_validation.is_above_35000_sf
  ) {
    has_2025_2029_threshold = false;
  } else {
    has_2025_2029_threshold = true;
  }

  let compliance_obj = [];
  let abs_thresholds = emissions_thresholds.absolute;
  let norm_thresholds = emissions_thresholds.normalized;
  let acp_per_ton = 234;
  let acp_per_kg = acp_per_ton * 0.001;

  annual_emissions.forEach((d) => {
    let { year, absolute, normalized } = d;
    let abs_total = absolute.total;
    let norm_total = normalized.total;

    const getAcp = (abs_total, abs_thresholds, norm_total, norm_thresholds) => {
      let carbon_deficit_absolute,
        carbon_surplus_absolute,
        carbon_deficit_normalized,
        carbon_surplus_normalized,
        payment,
        payment_avoidance;

      if (abs_thresholds || abs_thresholds === 0) {
        carbon_deficit_absolute = max([0, abs_total - abs_thresholds]);
        carbon_surplus_absolute = max([0, abs_thresholds - abs_total]);

        carbon_deficit_normalized = max([0, norm_total - norm_thresholds]);
        carbon_surplus_normalized = max([0, norm_thresholds - norm_total]);

        payment = carbon_deficit_absolute * acp_per_kg;
        payment_avoidance = carbon_surplus_absolute * acp_per_kg;
      } else {
        carbon_deficit_absolute = 0;
        carbon_surplus_absolute = 0;

        carbon_deficit_normalized = 0;
        carbon_surplus_normalized = 0;

        payment = 0;
        payment_avoidance = 0;
      }

      return {
        payment: payment,
        payment_avoidance: payment_avoidance,
        carbon_deficit_absolute: carbon_deficit_absolute,
        carbon_surplus_absolute: carbon_surplus_absolute,
        carbon_deficit_normalized: carbon_deficit_normalized,
        carbon_surplus_normalized: carbon_surplus_normalized,
      };
    };
    let acpobj = {};

    const nullAcp = {
      payment: 0,
      payment_avoidance: 0,
      carbon_deficit_absolute: 0,
      carbon_surplus_absolute: 0,
      carbon_deficit_normalized: 0,
      carbon_surplus_normalized: 0,
    };
    if (+year <= 2024) {
      acpobj = nullAcp;
    } else if (+year <= 2029 && !has_2025_2029_threshold) {
      acpobj = nullAcp;
    } else if (+year <= 2029 && has_2025_2029_threshold) {
      acpobj = getAcp(
        abs_total,
        abs_thresholds["2025-2029"],
        norm_total,
        norm_thresholds["2025-2029"]
      );
    } else if (+year <= 2034) {
      acpobj = getAcp(
        abs_total,
        abs_thresholds["2030-2034"],
        norm_total,
        norm_thresholds["2030-2034"]
      );
    } else if (+year <= 2039) {
      acpobj = getAcp(
        abs_total,
        abs_thresholds["2035-2039"],
        norm_total,
        norm_thresholds["2035-2039"]
      );
    } else if (+year <= 2044) {
      acpobj = getAcp(
        abs_total,
        abs_thresholds["2040-2044"],
        norm_total,
        norm_thresholds["2040-2044"]
      );
    } else if (+year <= 2049) {
      acpobj = getAcp(
        abs_total,
        abs_thresholds["2045-2049"],
        norm_total,
        norm_thresholds["2045-2049"]
      );
    } else if (+year > 2049) {
      acpobj = getAcp(
        abs_total,
        abs_thresholds["2050-"],
        norm_total,
        norm_thresholds["2050-"]
      );
    }
    compliance_obj.push({
      year: year,
      acp_payment: acpobj.payment,
      carbon_deficit_absolute: acpobj.carbon_deficit_absolute,
      carbon_surplus_absolute: acpobj.carbon_surplus_absolute,
      carbon_deficit_normalized: acpobj.carbon_deficit_normalized,
      carbon_surplus_normalized: acpobj.carbon_surplus_normalized,
      payment_avoidance: acpobj.payment_avoidance,
    });
  });
  return compliance_obj;
};

const getEmissionsThresholds = (areas, building_validation) => {
  let has_2025_2029_threshold;

  if (!building_validation.is_above_20000_sf) {
    has_2025_2029_threshold = false;
  }

  if (
    building_validation.is_above_20000_sf &&
    !building_validation.is_above_35000_sf
  ) {
    has_2025_2029_threshold = false;
  } else {
    has_2025_2029_threshold = true;
  }

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

  // handle area validation... is 'null' the right way to express this?
  if (!has_2025_2029_threshold) {
    absolute["2025-2029"] = null;
    normalized["2025-2029"] = null;
  }

  if (!building_validation.is_above_20000_sf) {
    absolute["2025-2029"] = null;
    absolute["2030-2034"] = null;
    absolute["2035-2039"] = null;
    absolute["2040-2044"] = null;
    absolute["2045-2049"] = null;
    absolute["2050-"] = null;

    normalized["2025-2029"] = null;
    normalized["2030-2034"] = null;
    normalized["2035-2039"] = null;
    normalized["2040-2044"] = null;
    normalized["2045-2049"] = null;
    normalized["2050-"] = null;
  }

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
    has_input: totalarea == 0 ? false : true,
    is_above_35000_sf: totalarea >= 35000 ? true : false,
    is_above_20000_sf: totalarea >= 20000 ? true : false,
  };

  let consumption_mmbtu = {};
  Object.keys(consumption_native).forEach((fuel) => {
    let val = consumption_native[fuel];
    consumption_mmbtu[fuel] = convertNativeToMMBtu(val, fuel);
  });

  let onsite_generation_mmbtu = {};
  Object.keys(onsite_generation_native).forEach((fuel) => {
    let val = onsite_generation_native[fuel];
    onsite_generation_mmbtu[fuel] = -convertNativeToMMBtu(val, fuel);
  });

  let annual_emissions = getAnnualEmissions(
    years,
    consumption_mmbtu,
    onsite_generation_mmbtu,
    totalarea
  );

  let emissions_thresholds = getEmissionsThresholds(areas, building_validation);

  let alternative_compliance_payments = getAlternativeCompliancePayments(
    emissions_thresholds,
    annual_emissions,
    building_validation
  );

  let compiled_obj = {
    building_validation: building_validation,
    annual_emissions: annual_emissions,
    emissions_thresholds: emissions_thresholds,
    alternative_compliance_payments: alternative_compliance_payments,
  };

  return compiled_obj;
};

export { compileBuildingProfile };
