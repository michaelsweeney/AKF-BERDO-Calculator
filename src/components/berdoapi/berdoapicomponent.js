import { conn } from "../../store/connect";

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
  return {};
};

export default conn(mapStateToProps)(BerdoApiComponent);
