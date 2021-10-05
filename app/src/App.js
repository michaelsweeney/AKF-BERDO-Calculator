import React from "react";
import "./App.css";
import { conn } from "./store/connect";
import { EmissionsStandards } from "./calcs/emissionsstandards";

const App = (props) => {
  return (
    <div className="App">
      {Object.keys(EmissionsStandards).map((k) => (
        <div>
          {k}:{EmissionsStandards[k]}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    stateprops: { ...store },
  };
};

export default conn(mapStateToProps)(App);
