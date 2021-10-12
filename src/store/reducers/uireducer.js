const initialState = {
  dims: {
    height: window.innerHeight,
    width: window.innerWidth,
  },
  isLoadModalOpen: true,
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_IS_LOAD_MODAL_OPEN": {
      return {
        ...state,
        isLoadModalOpen: action.payload,
      };
    }
    default:
      return state;
  }
}
