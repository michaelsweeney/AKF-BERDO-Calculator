import { useEffect, useState } from "react";
import { conn } from "../../store/connect";
import { TextInput } from "../userinputs/textinput";
import { queryBuildingsByTextInput } from "./queries";

const BerdoApiInput = (props) => {
  const inputQueryCallback = (e) => {
    let actionCallback = props.actions.setBerdoApiQueryResults;
    let inputval = e.target.value;

    // handle synchronous & ui updates
    props.actions.setBerdoApiInputQuery(inputval);
    // send to async query function
    queryBuildingsByTextInput(inputval, actionCallback);
  };

  return (
    <div>
      <div>
        <TextInput
          label={"lookup query"}
          value={props.berdoapi.inputQuery}
          changeCallback={inputQueryCallback}
        />
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
