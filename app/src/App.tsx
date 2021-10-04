import React from "react";
import "./App.css";

import { EmissionsStandards } from "./calcs/emissionsstandards";

function App() {
  return (
    <div className="App">
      {Object.keys(EmissionsStandards).map((k) => (
        <div>
          {k}:{EmissionsStandards[k]}
        </div>
      ))}
    </div>
  );
}

export default App;
