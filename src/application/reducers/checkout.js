import { LOAD_CHECKOUT_SUCCESS } from "../actions/checkout";

const initialState = {
  checkoutStatus: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHECKOUT_SUCCESS:
      return {
        checkoutStatus: action.payload.success,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
