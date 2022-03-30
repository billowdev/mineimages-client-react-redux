import {
  loadCompleteOrdersSuccess,
  loadCompleteOrdersFailed,
  LOAD_COMPLETE_ORDERS,
} from "../actions/complete_orders";

import * as uiActions from "../actions/ui";

const loadOrdersFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOAD_COMPLETE_ORDERS) {
      try {
        dispatch(uiActions.setLoading(true));

        const orders = await api.orders.getCompleteOrders();
        dispatch(loadCompleteOrdersSuccess(orders));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadCompleteOrdersFailed(err));
      }
    }
  };

export default [loadOrdersFlow];
