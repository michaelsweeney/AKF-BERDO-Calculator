import { useEffect, useState } from "react";
import { conn } from "../../store/connect";
import { TextInput } from "../userinputs/textinput";
import { queryCsvByTextInput } from "./csvqueries";

const BerdoApiInput = (props) => {
  const inputQueryCallback = (e) => {
    let actionCallback = props.actions.setBerdoApiQueryResults;
    let inputval = e.target.value;

    // handle synchronous & ui updates
    props.actions.setBerdoApiInputQuery(inputval);
    // send to async query function
    queryCsvByTextInput(inputval, actionCallback);
    // queryBuildingsByTextInput(inputval, actionCallback);
  };

  return (
    <div>
      <div>
        <div style={{ width: 500 }}>
          <TextInput
            label="search for your building..."
            value={props.berdoapi.inputQuery}
            changeCallback={inputQueryCallback}
            autoFocus={true}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    berdoapi: { ...store.building.berdoapi },
  };
};

export default conn(mapStateToProps)(BerdoApiInput);
