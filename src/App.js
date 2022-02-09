import React, { useEffect } from "react";
import "./App.css";
import { conn } from "./store/connect";

import { makeStyles } from "@material-ui/styles";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContainer from "./components/maincontainer";
import LoadBldgModal from "./components/modals/loadbldgmodal";
import AboutModal from "./components/modals/aboutmodal";
import LoadedSummaryModal from "./components/modals/loadedsummarymodal";
import TooSmallModal from "./components/modals/toosmallmodal";
const is_demo_mode = false;

const theme = createTheme({
  palette: {
    secondary: {
      main: "#cf202e",
    },
    primary: {
      main: "#283759",
    },
  },
});

const useStyles = makeStyles({
  app: {
    height: "100vh",
    width: "100vw",
    minWidth: 900,
    boxSizing: "border-box",
    overflow: "hidden",
  },
});

const App = (props) => {
  const classes = useStyles();

  // load test dataset...
  useEffect(() => {
    const test_building_data = {
      areas: [
        {
          type: "office",
          area: 21000,
          index: 0,
        },
      ],
      consumption_native: {
        elec_grid: 260000,
        gas: 0,
        fuel_1: 0,
        fuel_2: 0,
        fuel_4: 0,
        diesel: 0,
        district_steam: 0,
        district_hot_water: 0,
        elec_driven_chiller: 0,
        absorption_chiller_gas: 0,
        engine_driven_chiller_gas: 0,
      },
      onsite_generation_native: {
        elec_pv: 800,
      },
    };

    if (is_demo_mode) {
      props.actions.setAllBuildingInputs(test_building_data);
    }
    props.actions.compileBuildingOutputs();
  }, [props.actions]);

  // handle resize
  useEffect(() => {
    const handleResize = () => {
      props.actions.setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [props.actions]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Header />
        <MainContainer />
        <LoadBldgModal />
        <AboutModal />
        <LoadedSummaryModal />
        <TooSmallModal />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (store) => {
  return {
    actions: { ...store.actions },
  };
};

export default conn(mapStateToProps)(App);
