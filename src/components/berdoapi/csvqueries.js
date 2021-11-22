import * as d3 from "d3";

const dataset_lookup = {
  "2021_cal_2020": "./dataset_2021_calendar_2020.csv",
  "2020_cal_2019": "./dataset_2020_calendar_2019.csv",
  "2019_cal_2018": "./dataset_2019_calendar_2018.csv",
};

const queryCsvByTextInput = async (input, callbackFunction, dataset_year) => {
  const dataset = dataset_lookup[dataset_year];

  d3.csv(dataset).then((arr) => {
    let filtered = arr.filter((row) => {
      let query_string =
        row["Property Name"] + row["Address"] + row["Tax Parcel"];

      let input_lower = input.toLowerCase();
      let query_lower = query_string.toLowerCase();

      if (query_lower.includes(input_lower)) {
        return row;
      }
    });
    callbackFunction(filtered);
  });
};

const queryBuildingDataFromCsv = async (
  input,
  callbackFunction,
  dataset_year
) => {
  const dataset = dataset_lookup[dataset_year];

  d3.csv(dataset).then((arr) => {
    let filtered = arr.filter((row) => {
      let row_property_name = row["Property Name"];
      let row_tax_parcel = row["Tax Parcel"];
      let row_address = row["Address"];

      let input_property_name = input["Property Name"];
      let input_tax_parcel = input["Tax Parcel"];
      let input_address = input["Address"];

      if (
        row_property_name === input_property_name &&
        row_tax_parcel === input_tax_parcel &&
        row_address === input_address
      ) {
        return row;
      }
    });

    if (filtered.length > 1) {
      console.error("error: more than one record found for query.");
    }
    callbackFunction(filtered[0]);
  });

  return;
};

export { queryCsvByTextInput, queryBuildingDataFromCsv };
