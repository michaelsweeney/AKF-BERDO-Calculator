/* building actions */
export function addBuildingType(idx) {
  return {
    type: "ADD_BUILDING_TYPE",
    payload: idx,
  };
}

export function removeBuildingType(idx) {
  return {
    type: "REMOVE_BUILDING_TYPE",
    payload: idx,
  };
}

export function setBuildingTypeArea(val, idx) {
  return {
    type: "SET_BUILDING_TYPE_AREA",
    payload: { val, idx },
  };
}

export function setBuildingType(val, idx) {
  return {
    type: "SET_BUILDING_TYPE",
    payload: { val, idx },
  };
}

export function setUtilityConsumption(val, fuel) {
  return {
    type: "SET_UTILITY_CONSUMPTION",
    payload: { val, fuel },
  };
}

export function compileBuildingOutputs() {
  return {
    type: "COMPILE_BUILDING_OUTPUTS",
  };
}

export function setAllBuildingInputs(obj) {
  return {
    type: "SET_ALL_BUILDING_INPUTS",
    payload: obj,
  };
}

/* ui actions */
export function setIsLoadModalOpen(bool) {
  return {
    type: "SET_IS_LOAD_MODAL_OPEN",
    payload: bool,
  };
}
