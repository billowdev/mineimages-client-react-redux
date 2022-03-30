import {
  loadOrdersSuccess,
  loadOrdersFailed,
  LOAD_ORDERS,
} from "../actions/orders";

import * as uiActions from "../actions/ui";

const loadOrdersFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOAD_ORDERS) {
      try {
        dispatch(uiActions.setLoading(true));

        console.log("on middle ware orders", action.payload);
        //   const orders = await api.orders.getOrders(action.payload);
        //   console.log("on middle ware orders", orders)
        //   dispatch(loadOrdersSuccess(orders));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadOrdersFailed(err));
      }
    }
  };

export default [loadOrdersFlow];
