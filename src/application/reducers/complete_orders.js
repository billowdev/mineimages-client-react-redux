import { LOAD_COMPLETE_ORDERS_SUCCESS } from "../actions/complete_orders";
const initialState = {
  success: null,
  msg: null,
  complete: [],
  totalItem: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
