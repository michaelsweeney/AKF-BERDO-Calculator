import { conn } from "../../store/connect";
import { TextInput } from "../userinputs/textinput";
import { queryCsvByTextInput } from "./csvqueries";
import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {},
  yearselectContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  yearSelectTitle: {
    marginBottom: 10,
    color: "rgba(0,0,0,0.6)",
    fontSize: 12,
  },
  covidWarningFlag: {
    marginBottom: 20,
    marginTop: 0,
    color: "red",
    fontSize: "0.75em",
  },
});

const BerdoApiInput = (props) => {
  const classes = useStyles();
  const inputQueryCallback = (e) => {
    let actionCallback = props.actions.setBerdoApiQueryResults;
    let inputval = e.target.value;

    // handle synchronous & ui updates
    props.actions.setBerdoApiInputQuery(inputval);
    // send to async query function
    queryCsvByTextInput(
      inputval,
      actionCallback,
      props.berdoapi.berdo_dataset_year
    );
    // queryBuildingsByTextInput(inputval, actionCallback);
  };

  const changeDataSetYear = (e) => {
    let value = e.target.value;
    props.actions.setBerdoDatasetYear(value);
    props.actions.setBerdoApiInputQuery("");
    props.actions.setBerdoApiQueryResults([]);
  };

  const datasets = [
    {
      key: "2021_cal_2020",
      val: "2021_cal_2020",
      text: "2021 Dataset (calendar year 2020)",
    },
    {
      key: "2020_cal_2019",
      val: "2020_cal_2019",
      text: "2020 Dataset (calendar year 2019)",
    },
    {
      key: "2019_cal_2018",
      val: "2019_cal_2018",
      text: "2019 Dataset (calendar year 2018)",
    },
  ];

  const covidwarningflag =
    props.berdoapi.berdo_dataset_year == "2021_cal_2020" ? true : false;

  return (
    <div>
      <div className={classes.yearselectContainer}>
        <div className={classes.yearSelectTitle}>Choose Dataset Year</div>
        <Select
          size="small"
          sx={{ minWidth: 500 }}
          value={props.berdoapi.berdo_dataset_year}
          onChange={changeDataSetYear}
        >
          {datasets.map((d) => (
            <MenuItem key={d.key} value={d.val}>
              {d.text}
            </MenuItem>
          ))}
        </Select>
      </div>
      {covidwarningflag ? (
        <div className={classes.covidWarningFlag}>
          <u>Note</u>: Early COVID-19 shutdowns may skew reported results for
          calendar year 2020
        </div>
      ) : (
        <div></div>
      )}

      <div style={{ width: 500 }}>
        <TextInput
          label="search for your building..."
          value={props.berdoapi.inputQuery}
          changeCallback={inputQueryCallback}
          autoFocus={true}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    berdoapi: { ...store.building.berdoapi },
  };
};

export default conn(mapStateToProps)(BerdoApiInput);
