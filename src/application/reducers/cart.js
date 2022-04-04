import { LOAD_ONCART_ORDERS_SUCCESS } from "../actions/cart";

const initialState = {
  allOncarts: [],
  totalPrice:0,
  totalItem:0,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ONCART_ORDERS_SUCCESS:
      return {
        allOncarts: action.payload.data.oncart,
        totalItem: action.payload.data.totalItem,
        totalPrice: action.payload.data.totalPrice,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
