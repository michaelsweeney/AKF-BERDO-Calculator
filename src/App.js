import React from "react";
import "./App.css";
import { conn } from "./store/connect";
import { DemoBuilding } from "./components/demobuilding";
const App = (props) => {
  return (
    <div className="App">
      <DemoBuilding />
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    stateprops: { ...store },
  };
};

export default conn(mapStateToProps)(App);
