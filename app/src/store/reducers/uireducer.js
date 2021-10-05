const initialState = {
  dims: {
    height: window.innerHeight,
    width: window.innerWidth,
  },
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_IS_LOADED_ERROR": {
      return {
        ...state,
        isLoadedError: action.payload,
      };
    }
    default:
      return state;
  }
}
