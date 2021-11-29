// source: https://www.boston.gov/sites/default/files/file/2021/02/Boston_Performance_Standard_Technical_Methods_2021-02-18_20-013.pdf

// Emission factor
// (kg CO2e/MMBtu)

const non_electric_emissions_factors = {
  gas: 53.11,
  fuel_1: 73.5,
  fuel_2: 74.21,
  fuel_4: 75.29,
  diesel: 74.21,
  district_steam: 66.4,
  district_hot_water: 66.4,
  elec_driven_chiller: 52.7,
  absorption_chiller_gas: 73.89,
  engine_driven_chiller_gas: 49.31,
};

// kg CO2e/ MMBtu
const electric_emissions_factors_by_year = {
  2021: 81,
  2022: 79,
  2023: 77,
  2024: 75,
  2025: 73,
  2026: 71,
  2027: 69,
  2028: 67,
  2029: 65,
  2030: 62,
  2031: 60,
  2032: 58,
  2033: 56,
  2034: 54,
  2035: 52,
  2036: 50,
  2037: 48,
  2038: 46,
  2039: 44,
  2040: 42,
  2041: 40,
  2042: 37,
  2043: 35,
  2044: 33,
  2045: 31,
  2046: 29,
  2047: 27,
  2048: 25,
  2049: 23,
  2050: 21,
  2051: 21,
};

const years = Object.keys(electric_emissions_factors_by_year);

export {
  electric_emissions_factors_by_year,
  non_electric_emissions_factors,
  years,
};
