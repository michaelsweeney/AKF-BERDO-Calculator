import { EmissionsStandards } from "./emissionsstandards";
import {
  ElectricEmissionsFactorsByYear,
  NonElectricEmissionFactors,
} from "./emissionsfactors";

const getEmissionsFactorsByYear = (year) => {
  return {
    ...NonElectricEmissionFactors,
    grid_elec: ElectricEmissionsFactorsByYear[year],
  };
};

const getEmissionsFromConsumption = (consumption, factors) => {
  const emissions = { total: 0 };

  Object.keys(consumption).forEach((k) => {
    const fuel_factor = factors[k];
    const fuel_consumption = consumption[k];
    const fuel_emission = fuel_consumption * fuel_factor;
    emissions[k] = fuel_emission;

    emissions["total"] += fuel_emission;
  });

  return emissions;
};

const getAnnualEmissions = (year, consumption) => {
  const factors = getEmissionsFactorsByYear(year);
  const emissions = getEmissionsFromConsumption(consumption, factors);
  return emissions;
};

const compileBuildingProfile = (buildinginputs) => {
  /**
   * need to calculate blended co2e/sf for each year of
   * elec grid rates
   *
   * get emissions standard for each year range
   *
   * return array of objects with keys:
   * - year
   * - co2e/sf/yr
   * - blended standard for year
   */

  const { areas, consumption } = buildinginputs;

  const years = Object.keys(ElectricEmissionsFactorsByYear);
  const AnnualEmissionArray = years.map((year) =>
    getAnnualEmissions(year, consumption)
  );
  /* todo */

  console.log(AnnualEmissionArray);

  const NormalizedAnnualEmissionArray = null; // AnnualEmissions divided by area

  const EmissionsStandardsByYear = null; // array of blended

  return { a: 1 };
};

export { compileBuildingProfile };
