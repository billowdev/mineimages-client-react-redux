import { LOAD_ORDERS_SUCCESS } from "../actions/orders";
const initialState = {
  allUserOrders: [],
  totalOrder: 0,
  error:null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        allUserOrders: action.payload.data,
        error:null
      };
    default:
      return state;
  }
};

export default reducer;
