const initialState = {
  isLoadModalOpen: false,
  isAboutModalOpen: false,
  isLoadedSummaryModalOpen: false,
  accordion: {
    property_types: true,
    utility_consumption: false,
  },
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_IS_LOAD_MODAL_OPEN": {
      return {
        ...state,
        isLoadModalOpen: action.payload,
      };
    }
    case "SET_IS_ABOUT_MODAL_OPEN": {
      return {
        ...state,
        isAboutModalOpen: action.payload,
      };
    }
    case "SET_IS_LOADED_SUMMARY_MODAL_OPEN": {
      return {
        ...state,
        isLoadedSummaryModalOpen: action.payload,
      };
    }
    case "SET_WINDOW_DIMENSIONS": {
      return {
        ...state,
        dims: action.payload,
      };
    }
    case "TOGGLE_ACCORDION": {
      return {
        ...state,
        accordion: {
          property_types:
            action.payload === "property_types"
              ? !state.accordion.property_types
              : !state.accordion.property_types,
          utility_consumption:
            action.payload === "utility_consumption"
              ? !state.accordion.utility_consumption
              : !state.accordion.utility_consumption,
        },
      };
    }
    default:
      return state;
  }
}
