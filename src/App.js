import React, { useEffect } from "react";
import "./App.css";
import { conn } from "./store/connect";

import { makeStyles } from "@material-ui/styles";
import BldgInputsContainer from "./components/userinputs/bldginputscontainer";
import CompiledResults from "./components/compiledresults";

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
    props.actions.compileBuildingOutputs();
  }, [props.actions]);

  return (
    <div className={classes.app}>
      <div className={classes.side}>
        <BldgInputsContainer />
      </div>
      <div className={classes.main}>
        <CompiledResults />
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    stateprops: { ...store },
  };
};

export default conn(mapStateToProps)(App);
