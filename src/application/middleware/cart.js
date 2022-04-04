import {
  loadOnCartOrdersSuccess,
  loadOnCartOrdersFailed,
  LOAD_ONCART_ORDERS,
} from "../actions/cart";

import * as uiActions from "../actions/ui";

const loadOnCartOrdersFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOAD_ONCART_ORDERS) {
      try {
        dispatch(uiActions.setLoading(true));
        const orders = await api.cart.getOnCartOrders();
        console.log("on middleware cart: " ,orders)
        dispatch(loadOnCartOrdersSuccess(orders));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadOnCartOrdersFailed(err));
      }
    }
  };

export default [loadOnCartOrdersFlow];
