import React, { useEffect } from "react";
import "./App.css";
import { conn } from "./store/connect";

import { makeStyles } from "@material-ui/styles";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContainer from "./components/maincontainer";
import LoadBldgModal from "./components/loadbldgmodal";

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
          area: 1000,
          index: 0,
        },
      ],
      consumption_native: {
        grid_elec: 18000,
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
    };
    props.actions.setAllBuildingInputs(test_building_data);
    props.actions.compileBuildingOutputs();
  }, [props.actions]);


  // handle resize
  useEffect(() => {

    const handleResize = () => {
      props.actions.setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)


  }, [])

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
