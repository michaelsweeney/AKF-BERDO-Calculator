import React, { useEffect } from "react";
import "./App.css";
import { conn } from "./store/connect";

import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import BldgInputsContainer from "./components/userinputs/bldginputscontainer";
import LinePlot from "./components/charts/lineplot";
import LoadBldgModal from "./components/loadbldgmodal";
import BerdoApiComponent from "./components/berdoapi/berdoapi";

const useStyles = makeStyles({
  app: {},
  side: {
    padding: 20,
    width: "200px",
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
      consumption_native: {
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
      <h2>{props.state.building.building_name}</h2>
      <div className={classes.side}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => props.actions.setIsLoadModalOpen(true)}
        >
          FIND YOUR BUILDING
        </Button>

        <BldgInputsContainer />
      </div>
      <div className={classes.main}>
        <LinePlot />
      </div>
      <LoadBldgModal>
        <BerdoApiComponent />
      </LoadBldgModal>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    state: { ...store },
  };
};

export default conn(mapStateToProps)(App);
