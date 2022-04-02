import { LOAD_ORDERS_SUCCESS, LOAD_COMPLETE_ORDERS_SUCCESS } from "../actions/orders";
const initialState = {
  allUserOrders: [],
  totalOrder: 0,
  complete: [],
  totalItem: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        allUserOrders: action.payload.data,
        error: null,
      };
    case LOAD_COMPLETE_ORDERS_SUCCESS:
      return {
        success: action.payload.success,
        msg: action.payload.msg,
        complete: action.payload.data.complete,
        totalItem: action.payload.totalItem,
      };
    default:
      return state;
  }
};

export default reducer;
