const initialState = {
  dims: {
    height: window.innerHeight,
    width: window.innerWidth,
  },
};

export default function windowReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_WINDOW_DIMENSIONS": {
      return {
        ...state,
        dims: action.payload,
      };
    }

    default:
      return state;
  }
}
