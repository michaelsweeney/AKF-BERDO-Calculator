import React, { useEffect } from "react";
import "./App.css";
import { conn } from "./store/connect";


import BldgInputsContainer from "./components/bldginputscontainer";
import CompiledResults from "./components/compiledresults";

const App = (props) => {

  useEffect(() => {
    props.actions.compileBuildingOutputs()
  }, [props.actions])

  return (
    <div className="App">

      <BldgInputsContainer />
      <CompiledResults />

    </div>
  );
};



const mapStateToProps = (store) => {
  return {
    stateprops: { ...store },
  };
};

export default conn(mapStateToProps)(App);
