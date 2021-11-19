const initialState = {
  isLoadModalOpen: false,
  isAboutModalOpen: false,
  isLoadedSummaryModalOpen: false,
  accordion: {
    active_key: "property_types",
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
      let active_key;
      if (action.payload === state.accordion.active_key) {
        active_key = "property_types";
      } else {
        active_key = action.payload;
      }

      return {
        ...state,
        accordion: {
          active_key: active_key,
        },
      };
    }
    default:
      return state;
  }
}
