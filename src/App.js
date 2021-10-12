import React, { useEffect } from "react";
import "./App.css";
import { conn } from "./store/connect";

import { makeStyles } from "@material-ui/styles";
import BldgInputsContainer from "./components/userinputs/bldginputscontainer";
import CompiledResults from "./components/compiledresults";
import TestChart from "./components/charts/testchart";
import LoadBldgModal from "./components/loadbldgmodal";
import BerdoApiComponent from "./components/berdoapi/berdoapi";
const useStyles = makeStyles({
  app: {
    boxSizing: "border-box",
  },
  side: {
    padding: 20,
    width: "400px",
    display: "inline-block",
    verticalAlign: "top",
  },
  main: {
    padding: 20,
    width: "calc(100vw - 500px)",
    display: "inline-block",
  },
});

const App = (props) => {
  const classes = useStyles();
  useEffect(() => {
    // load test dataset...
    const test_building_data = {
      areas: [
        {
          type: "office",
          area: 30000,
          index: 0,
        },
        {
          type: "assembly",
          area: 10000,
          index: 1,
        },
      ],
      consumption: {
        gas: 1000,
        fuel_1: 0,
        fuel_2: 50,
        fuel_4: 0,
        diesel: 0,
        district_steam: 0,
        district_hot_water: 0,
        elec_driven_chiller: 0,
        absorption_chiller_gas: 0,
        engine_driven_chiller_gas: 0,
        grid_elec: 2000,
      },
    };
    props.actions.setAllBuildingInputs(test_building_data);
    props.actions.compileBuildingOutputs();
  }, [props.actions]);

  return (
    <div className={classes.app}>
      <BerdoApiComponent />
      {/* <LoadBldgModal /> */}
      {/* <div className={classes.side}> */}
      {/* <BldgInputsContainer /> */}
      {/* </div> */}
      {/* <div className={classes.main}> */}
      {/* <TestChart /> */}

      {/* <CompiledResults /> */}
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    state: { ...store },
  };
};

export default conn(mapStateToProps)(App);
