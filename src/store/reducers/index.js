import { combineReducers } from "redux";

import uiReducer from "./uireducer";
import buildingReducer from "./buildingreducer";
import windowReducer from "./windowreducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  building: buildingReducer,
  window: windowReducer,
});

export default rootReducer;
