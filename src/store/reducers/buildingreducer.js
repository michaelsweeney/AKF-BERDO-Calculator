const initialState = {};

export default function buildingReducer(state = initialState, action) {
  switch (action.type) {
    case "DEMO_ACTION": {
      return {
        ...state,
        someDefaultAction: action.payload,
      };
    }

    default:
      return state;
  }
}
