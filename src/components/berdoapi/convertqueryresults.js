import convertBuildingType from "./convertbuildingtype";
import { convertMMBtuToNative } from "../../calculations/unitconversions";

/* 
ASSUMPTIONS IN DATASET CONVERSION:
- no input for multiple fuel oils... assume BERDO Input Number Two
- no 'district chw' input in BERDO calcs. assuming elec driven.
- no '% Other (Diesel #2, Kerosene, Propane or Other Fuel)' input in BERDO calcs. Assume diesel.
- other conversion lookups to be found in convertBuildingType
*/

const convertQueryResults = (results) => {
  let area = +results["Gross Area (sq ft)"];
  let type = convertBuildingType(results["Property Type"]);

  let name = results["Property Name"] + " - " + results["Address"];

  let total_mmbtu = +results["Total Site Energy (kBTU)"] / 1e3;

  let elec_mmbtu = total_mmbtu * +results["% Electricity"];
  let gas_mmbtu = total_mmbtu * +results["% Gas"];
  let district_chw_mmbtu = total_mmbtu * +results["% District Chilled Water"];
  let district_hw_mmbtu = total_mmbtu * +results["% District Hot Water"];
  let steam_mmbtu = total_mmbtu * +results["% Steam"];
  let fuel_oil_two_mmbtu = total_mmbtu * +results["% Fuel Oil"];
  let other_mmbtu =
    total_mmbtu *
    +results["% Other (Diesel #2, Kerosene, Propane or Other Fuel)"];

  let elec_native = convertMMBtuToNative(elec_mmbtu, "elec_grid");
  let gas_native = convertMMBtuToNative(gas_mmbtu, "gas");
  let district_chw_native = convertMMBtuToNative(
    district_chw_mmbtu,
    "district_chilled_water"
  );
  let district_hw_native = convertMMBtuToNative(
    district_hw_mmbtu,
    "district_hot_water"
  );
  let steam_native = convertMMBtuToNative(steam_mmbtu, "district_steam");
  let fuel_oil_two_native = convertMMBtuToNative(fuel_oil_two_mmbtu, "fuel_2");
  let other_native = convertMMBtuToNative(other_mmbtu, "diesel");

  let onsite_elec_pv = results["Onsite Renewable (kWh)"];

  let areas = [
    {
      type: type,
      area: area,
      index: 0,
    },
  ];

  let consumption = {
    elec_grid: elec_native || 0,
    gas: gas_native || 0,
    fuel_1: 0, // fuel not in query reults
    fuel_2: fuel_oil_two_native || 0,
    fuel_4: fuel_oil_two_native || 0,
    diesel: other_native || 0,
    district_steam: steam_native || 0,
    district_hot_water: district_hw_native || 0,
    elec_driven_chiller: district_chw_native || 0,
    absorption_chiller_gas: 0, // fuel not in query reults
    engine_driven_chiller_gas: 0, // fuel not in query reults
  };

  let onsite_generation_native = {
    elec_pv: onsite_elec_pv,
  };

  return {
    areas: areas,
    consumption: consumption,
    name: name,
    onsite_generation_native: onsite_generation_native,
  };
};

export { convertQueryResults };
