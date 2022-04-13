import { LOAD_ORDERS_ON_TRANSACTIONS_SUCCESS } from "../../actions/admin/transactions";

const initialState = {
  pendingTransactions: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS_ON_TRANSACTIONS_SUCCESS:
      return {
        pendingTransactions: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
