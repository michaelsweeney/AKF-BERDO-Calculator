/**
 * arrays correspond to the following years:
 * 2025-2029
 * 2030-2034
 * 2035-2039
 * 2040-2044
 * 2045-2049
 * 2050-
 *
 * units are kgCO2e/SF
 */

const emissions_standards = {
  assembly: [7.8, 4.6, 3.3, 2.1, 1.1, 0],
  college_university: [10.2, 5.3, 3.8, 2.5, 1.2, 0],
  education: [3.9, 2.4, 1.8, 1.2, 0.6, 0],
  food_sales_service: [17.4, 10.9, 8.0, 5.4, 2.7, 0],
  healthcare: [15.4, 10.0, 7.4, 4.9, 2.4, 0],
  lodging: [5.8, 3.7, 2.7, 1.8, 0.9, 0],
  manufacturing_industrial: [23.9, 15.3, 10.9, 6.7, 3.2, 0],
  multifamily_housing: [4.1, 2.4, 1.8, 1.1, 0.6, 0],
  office: [5.3, 3.2, 2.4, 1.6, 0.8, 0],
  retail: [7.1, 3.4, 2.4, 1.5, 0.7, 0],
  services: [7.5, 4.5, 3.3, 2.2, 1.1, 0],
  storage: [5.4, 2.8, 1.8, 1.0, 0.4, 0],
  technology_science: [19.2, 11.1, 7.8, 5.1, 2.5, 0],
};

export { emissions_standards };
