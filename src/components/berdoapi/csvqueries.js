import * as d3 from "d3";

const dataset = "./dataset_2021.csv";
const queryCsvByTextInput = (input, callbackFunction) => {
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

const queryBuildingDataFromCsv = (input, callbackFunction) => {
  d3.csv(dataset).then((arr) => {
    let filtered = arr.filter((row) => {
      let row_property_name = row["Property Name"];
      let row_tax_parcel = row["Tax Parcel"];
      let row_address = row["Address"];

      let input_property_name = input["Property Name"];
      let input_tax_parcel = input["Tax Parcel"];
      let input_address = input["Address"];

      if (
        row_property_name == input_property_name &&
        row_tax_parcel == input_tax_parcel &&
        row_address == input_address
      ) {
        return row;
      }
    });

    if (filtered.length > 1) {
      console.error("error: more than one record found for query.");
    }
    console.log(filtered[0]);
    callbackFunction(filtered[0]);
  });

  return;
};

export { queryCsvByTextInput, queryBuildingDataFromCsv };
