const escapify = (str) => {
  let escaped_str = "";
  for (let i = 0; i < str.length; i++) {
    escaped_str += `!${str.charAt(i)}`;
  }
  return escaped_str;
};

const INPUT_QUERY_FIELDS = [`"Property Name"`, `"Tax Parcel"`, `"Address"`];

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
  '"% Other (Diesel #2, Kerosene, Propane or Other Fuel)"',
];

// https://nattaylor.com/labs/analyzeboston/#
const queryBuildingsByTextInput = (input, callbackFunction) => {
  let processed_input = escapify(input);

  let URL_BEGIN = `https://data.boston.gov/api/3/action/datastore_search_sql?sql=`;
  // const CORS_ANYWHERE_URL = "https://berdo-cors-proxy.herokuapp.com/"
  // URL_BEGIN =  CORS_ANYWHERE_URL + URL_BEGIN;

  let URL_QUERY_MID = `SELECT ${INPUT_QUERY_FIELDS.join(
    ", "
  )} FROM "a7b155de-10ee-48fc-bd89-fc8e31134913" WHERE `;
  let URL_QUERY_END = `
  UPPER("Property Name") LIKE UPPER('%${processed_input}%') ESCAPE '!'
  OR 
  UPPER("Tax Parcel") LIKE UPPER('%${processed_input}%') ESCAPE '!'
  OR 
  UPPER("Address") LIKE UPPER('%${processed_input}%') ESCAPE '!'`;

  let URL_COMPILED = `${URL_BEGIN}${URL_QUERY_MID}${URL_QUERY_END}`;

  URL_COMPILED = encodeURI(URL_COMPILED);

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
  let tax_parcel = escapify(o["Tax Parcel"]);
  let property_name = escapify(o["Property Name"]);
  let address = escapify(o["Address"]);

  let URL_BEGIN = `https://data.boston.gov/api/3/action/datastore_search_sql?sql=`;
  // const CORS_ANYWHERE_URL = "https://berdo-cors-proxy.herokuapp.com/"
  // URL_BEGIN =  CORS_ANYWHERE_URL + URL_BEGIN;

  // this should work, but...
  let URL_QUERY_MID = `SELECT ${GET_BUILDING_FIELDS.join(
    `, `
  )} FROM "a7b155de-10ee-48fc-bd89-fc8e31134913" WHERE `;
  // select everything instead... DIESEL #2 IS THROWING AN ERROR

  URL_QUERY_MID = `select * from "a7b155de-10ee-48fc-bd89-fc8e31134913" WHERE `;
  let URL_QUERY_END = `UPPER("Tax Parcel") LIKE UPPER('%${tax_parcel}%') ESCAPE '!' 
  AND 
  UPPER("Property Name") LIKE UPPER('%${property_name}%') ESCAPE '!'
  AND 
  UPPER("Address") LIKE UPPER('%${address}%') ESCAPE '!'`;

  let URL_COMPILED = `${URL_BEGIN}${URL_QUERY_MID}${URL_QUERY_END}`;
  URL_COMPILED = encodeURI(URL_COMPILED);

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", URL_COMPILED, true);
  xmlhttp.onreadystatechange = (d) => {
    let res = xmlhttp.response;

    let record = JSON.parse(res).result.records[0];
    callbackFunction(record);
    try {
    } catch {
      console.warn("error: ", res);
    }
  };
  xmlhttp.send();
};
export { queryBuildingsByTextInput, queryBuildingData };
