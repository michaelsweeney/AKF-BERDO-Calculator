const INPUT_QUERY_FIELDS = ['"Property Name"', '"Tax Parcel"', '"Address"'];

const GET_BUILDING_FIELDS = [
  '"Property Name"',
  '"Tax Parcel"',
  '"Address"',
  '"Property Uses"',
  '"Total Site Energy (kBTU)"',
  '"Gross Area (sq ft)"',
  '"% Electricity"',
  '"% Gas"',
  '"% Steam"',
  '"% Fuel Oil"',
  '"% District Hot Water"',
  '"% District Chilled Water"',
  //   '"% Other (Diesel #2, Kerosene, Propane or Other Fuel)"',
];

const queryBuildingsByTextInput = (input, callbackFunction) => {
  let URL_BEGIN = `https://data.boston.gov/api/3/action/datastore_search_sql?sql=`;
  let URL_QUERY_MID = `SELECT ${INPUT_QUERY_FIELDS.join(
    ", "
  )} FROM "a7b155de-10ee-48fc-bd89-fc8e31134913" WHERE `;
  let URL_QUERY_END = `UPPER("Property Name") LIKE UPPER('%${input}%')`;
  let URL_COMPILED = `${URL_BEGIN}${URL_QUERY_MID}${URL_QUERY_END}`;

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", URL_COMPILED, true);
  xmlhttp.onreadystatechange = (d) => {
    try {
      let res = xmlhttp.response;
      let result = JSON.parse(res).result.records;

      callbackFunction(result);
    } catch {}
  };
  xmlhttp.send();
};

const queryBuildingData = (o, callbackFunction) => {
  let tax_parcel = o["Tax Parcel"];
  let property_name = o["Property Name"];
  let address = o["Address"];

  let URL_BEGIN = `https://data.boston.gov/api/3/action/datastore_search_sql?sql=`;
  let URL_QUERY_MID = `SELECT ${GET_BUILDING_FIELDS.join(
    ", "
  )} FROM "a7b155de-10ee-48fc-bd89-fc8e31134913" WHERE `;

  let URL_QUERY_END = `UPPER("Tax Parcel") LIKE UPPER('%${tax_parcel}%') AND UPPER("Property Name") LIKE UPPER('%${property_name}%') AND UPPER("Address") LIKE UPPER('%${address}%')`;

  let URL_COMPILED = `${URL_BEGIN}${URL_QUERY_MID}${URL_QUERY_END}`;

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", URL_COMPILED, true);
  xmlhttp.onreadystatechange = (d) => {
    let res = xmlhttp.response;
    console.log(JSON.parse(res));
    try {
      let result = JSON.parse(res);

      console.log(res);

      callbackFunction(result);
    } catch {}
  };
  xmlhttp.send();
};
export { queryBuildingsByTextInput, queryBuildingData };
