import { conn } from "../../../store/connect";

import * as d3 from "d3";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    // border: "1px solid black",
    // fontSize: "0.75em",
    height: "calc(100% - 30px)",

    overflowY: "scroll",
  },
  table: {
    // height: "calc(100% - 30px)",
    // overflowY: "scroll",
  },
  h1: {
    fontSize: "1em",
    fontWeight: 600,
    marginBottom: 15,
    marginTop: 15,
    textAlign: "center",
  },
  h2: {
    fontSize: "1em",
    fontWeight: 600,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 0,
  },
  footnotes: {
    fontSize: "0.75em",
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 15,
  },
});
const TabularPlot = (props) => {
  const classes = useStyles();
  const { building } = props;

  const dataset_lookup = {
    "2021_cal_2020": "2021 Dataset (calendar year 2020)",
    "2020_cal_2019": "2020 Dataset (calendar year 2019)",
    "2019_cal_2018": "2019 Dataset (calendar year 2018)",
  };

  const is_loaded_from_dataset =
    building.berdoapi.loadedBuildingInfo.length == 0 ? false : true;

  const threshold_table = [
    ["2025-2029", "2025"],
    ["2030-2034", "2030"],
    ["2035-2039", "2035"],
    ["2040-2044", "2040"],
    ["2045-2049", "2045"],
    ["2050-", "2050"],
  ].map((t) => {
    return {
      period: t[0],
      es_emissions: building.annual_emissions.filter((f) => f.year == t[1])[0]
        .normalized.total,
      es_threshold: building.emissions_thresholds.normalized[t[0]],
      acp_payment: building.alternative_compliance_payments.filter(
        (f) => f.year == t[1]
      )[0].acp_payment,
    };
  });

  return (
    <div className={classes.root}>
      <div>
        {!is_loaded_from_dataset ? (
          <div className={classes.h2}>Manually Input Building</div>
        ) : (
          <div>
            <div className={classes.h1}>{building.building_name}</div>
            <div className={classes.h2}>
              {dataset_lookup[building.berdoapi.berdo_dataset_year]}
            </div>
          </div>
        )}
        <div className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Period</TableCell>
                <TableCell>Building Emissions (es) - kgCO2e/sf/yr*</TableCell>
                <TableCell>BERDO Threshold (es) - kgCO2e/sf/yr*</TableCell>
                <TableCell>ACP Payments ($/yr)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {threshold_table.map((r) => {
                return (
                  <TableRow>
                    <TableCell>{r.period}</TableCell>
                    <TableCell>{d3.format(".3")(r.es_emissions)}</TableCell>
                    <TableCell>{d3.format(".3")(r.es_threshold)}</TableCell>
                    <TableCell>{d3.format("$,.0f")(r.acp_payment)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <div className={classes.footnotes}>
          <i>*emissions shown for beginning of period </i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(TabularPlot);
