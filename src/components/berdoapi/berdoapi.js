import { useEffect, useState } from "react";
import { conn } from "../../store/connect";
import { TextInput } from "../userinputs/textinput";

import BerdoApiInput from "./berdoapiinput";
import BerdoApiResultsTable from "./berdoapiresultstable";
const BerdoApiComponent = (props) => {
  return (
    <div>
      <BerdoApiInput />
      <BerdoApiResultsTable />
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    berdoapi: { ...store.building.berdoapi },
  };
};

export default conn(mapStateToProps)(BerdoApiComponent);
