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

export function setNativeUtilityConsumption(val, fuel) {
  return {
    type: "SET_NATIVE_UTILITY_CONSUMPTION",
    payload: { val, fuel },
  };
}
export function setNativeOnsiteGeneration(val, fuel) {
  return {
    type: "SET_NATIVE_ONSITE_GENERATION",
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
export function setIsAboutModalOpen(bool) {
  return {
    type: "SET_IS_ABOUT_MODAL_OPEN",
    payload: bool,
  };
}

export function setIsLoadedSummaryModalOpen(bool) {
  return {
    type: "SET_IS_LOADED_SUMMARY_MODAL_OPEN",
    payload: bool,
  };
}
export function toggleAccordion(val) {
  return {
    type: "TOGGLE_ACCORDION",
    payload: val,
  };
}

/* berdo api actions */
export function setBerdoApiInputQuery(query) {
  return {
    type: "SET_BERDO_API_INPUT_QUERY",
    payload: query,
  };
}

export function setBerdoApiQueryResults(query_array) {
  return {
    type: "SET_BERDO_API_QUERY_RESULTS",
    payload: query_array,
  };
}

export function setLoadedBuildingQueryInfo(result) {
  return {
    type: "SET_LOADED_BUILDING_QUERY_INFO",
    payload: result,
  };
}
export function setBerdoDatasetYear(result) {
  return {
    type: "SET_BERDO_DATASET_YEAR",
    payload: result,
  };
}
// resize actions
export function setWindowDimensions(dims) {
  return {
    type: "SET_WINDOW_DIMENSIONS",
    payload: dims,
  };
}
export function setActiveView(label) {
  return {
    type: "SET_ACTIVE_VIEW",
    payload: label,
  };
}
