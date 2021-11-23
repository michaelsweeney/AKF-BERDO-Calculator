const initialState = {
  isLoadModalOpen: false,
  isAboutModalOpen: false,
  isLoadedSummaryModalOpen: false,
  activeAccordionKey: "property_types",
  activeView: "payments",
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
      let active_key;
      if (action.payload === state.activeAccordionKey) {
        active_key = "property_types";
      } else {
        active_key = action.payload;
      }

      return {
        ...state,
        activeAccordionKey: active_key,
      };
    }

    case "SET_ACTIVE_VIEW": {
      return {
        ...state,
        activeView: action.payload,
      };
    }
    default:
      return state;
  }
}
