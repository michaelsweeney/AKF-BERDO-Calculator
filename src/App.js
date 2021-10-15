import React, { useEffect } from "react";
import "./App.css";
import { conn } from "./store/connect";

import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";

import { createTheme } from "@mui/system";

import Header from "./components/header";
import Footer from "./components/footer";
import MainContainer from "./components/maincontainer";
import LoadBldgModal from "./components/loadbldgmodal";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CF202E",
    },
  },
});

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
  header: {
    height: 100,
  },
});

const App = (props) => {
  console.log(theme);
  const classes = useStyles();

  // load test dataset...
  useEffect(() => {
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
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Header />
        <MainContainer />

        <LoadBldgModal />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (store) => {
  return {
    state: { ...store },
  };
};

export default conn(mapStateToProps)(App);
