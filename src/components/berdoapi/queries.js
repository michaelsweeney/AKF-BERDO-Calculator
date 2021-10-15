import * as d3 from "d3";
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

let URL_BEGIN = `https://data.boston.gov/api/3/action/datastore_search_sql?sql=`;
let PROXY_URL = "https://berdo-cors-proxy.herokuapp.com/";
// PROXY_URL = "localhost:8080/";
URL_BEGIN = PROXY_URL + URL_BEGIN;

// https://nattaylor.com/labs/analyzeboston/#
const queryBuildingsByTextInput = (input, callbackFunction) => {
  let processed_input = escapify(input);

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
  console.log(URL_COMPILED);
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", URL_COMPILED, true);
  xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
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
  console.log(URL_COMPILED);
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", URL_COMPILED, true);
  xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
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

const doCORSRequest = () => {
  d3.csv("dataset.csv").then((d) => {
    console.log(d);
  });
  console.log("testing only, delete this reference.");
  var cors_api_url = "https://berdo-cors-proxy.herokuapp.com/";
  var x = new XMLHttpRequest();

  var url =
    "https://data.boston.gov/api/3/action/datastore_search_sql?sql=select%20*%20from%20%22a7b155de-10ee-48fc-bd89-fc8e31134913%22%20WHERE%20UPPER(%22Tax%20Parcel%22)%20LIKE%20UPPER(%27%25!5!0!1!2!9!5!0!0!0!.!0%25%27)%20ESCAPE%20%27!%27%20%0A%20%20AND%20%0A%20%20UPPER(%22Property%20Name%22)%20LIKE%20UPPER(%27%25!2!3!4!%20!B!e!r!k%25%27)%20ESCAPE%20%27!%27%0A%20%20AND%20%0A%20%20UPPER(%22Address%22)%20LIKE%20UPPER(%27%25!2!3!4!%20!B!e!r!k!e!l!e!y!%20!S!t!r!e!e!t%25%27)%20ESCAPE%20%27!%27";
  x.open("GET", cors_api_url + url);
  x.onload = x.onerror = function () {
    console.log(x);
  };

  x.send(url);
};
export { queryBuildingsByTextInput, queryBuildingData, doCORSRequest };
