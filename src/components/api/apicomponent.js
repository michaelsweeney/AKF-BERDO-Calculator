import { useEffect } from "react";

const ApiComponent = () => {
  // const API_URL = 'https://data.boston.gov/datastore/odata3.0/a7b155de-10ee-48fc-bd89-fc8e31134913'
  // const API_URL = 'https://data.boston.gov/datastore/odata3.0/a7b155de-10ee-48fc-bd89-fc8e31134913'

  // let query = '?$top=5&$format=json'

  // query = '?$address="144/150 Boylston St"'

  // let URL_COMPILED = API_URL + query

  // URL_COMPILED = "https://data.boston.gov/api/3/action/datastore_search_sql

  // let DATASET_ID = 'a7b155de-10ee-48fc-bd89-fc8e31134913'

  // let ENDPOINT_QUERY = 'https://data.boston.gov/api/3/action/datastore_search'
  // let ENDPOINT_SQL = "https://data.boston.gov/api/3/action/datastore_search_sql?sql="
  // let QUERY = `SELECT * FROM "${DATASET_ID}" where UPPER('Property Name') like UPPER('%ROAD')`

  // // https://data.boston.gov/api/3/action/datastore_search_sql?sql=SELECT%20*%20FROM%20%22a7b155de-10ee-48fc-bd89-fc8e31134913%22%20where UPPER("Property Name") like UPPER('%ROAD%')
  // let URL_COMPILED = `https://data.boston.gov/api/3/action/datastore_search_sql?sql=SELECT * FROM "a7b155de-10ee-48fc-bd89-fc8e31134913" WHERE UPPER("Property Name") like UPPER('%Columbia West: 392%')`
  let QUERY_INPUT = "Columbia West: 392";

  let URL_BEGIN = `https://data.boston.gov/api/3/action/datastore_search_sql?sql=`;
  let URL_QUERY_MID = `SELECT * FROM "a7b155de-10ee-48fc-bd89-fc8e31134913" WHERE `;
  let URL_QUERY_END = `UPPER("Property Name") LIKE UPPER('%${QUERY_INPUT}%')`;

  let URL_COMPILED = `${URL_BEGIN}${URL_QUERY_MID}${URL_QUERY_END}`;

  console.log(URL_COMPILED);

  const callback = (e) => {
    console.log(e.result);
  };

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", URL_COMPILED, true);
  xmlhttp.onreadystatechange = (d) => {
    let res = xmlhttp.response;
    let parsed;
    console.log(JSON.parse(res).result.sql);
    console.log(JSON.parse(res));
    console.log(JSON.parse(res).result.records[0]);

    // try {
    //     parsed = JSON.parse(res);
    // } catch {
    //     parsed = JSON.parse(`"${res}"`);
    // }
    // if (parsed == "") {
    //     callback([{}]);
    // } else {
    //     try {
    //         parsed = parsed.filter((f) => {
    //             return Object.values(f).every((t) => t != undefined);
    //         });
    //         callback(parsed);
    //     }
    //     catch {
    //         console.log(query)
    //         console.log(parsed)
    //     }
    // }
  };
  xmlhttp.send();

  return <div>api</div>;
};

export default ApiComponent;
