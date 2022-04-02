import {
  loadOrdersSuccess,
  loadOrdersFailed,
  LOAD_ORDERS,
  USER_ORDER,
  userOrderSuccess,
  userOrderFailed,
  loadCompleteOrdersSuccess,
  loadCompleteOrdersFailed,
  LOAD_COMPLETE_ORDERS,
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
        const orders = await api.orders.getOrders(action.payload);
        console.log("on middle ware orders", orders);
        dispatch(loadOrdersSuccess(orders));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadOrdersFailed(err));
      }
    }
  };

const userOrderFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === USER_ORDER) {
      try {
        const orders = await api.orders.userOrder(action.payload);
        const state = orders.success;
        if (state === true) {
          dispatch(userOrderSuccess(orders));
        } else {
          dispatch(userOrderFailed(orders));
        }
      } catch (err) {
        dispatch(userOrderFailed(err));
      }
    }
  };

const loadCompleteOrdersFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
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
    next(action);
  };
export default [loadOrdersFlow, userOrderFlow, loadCompleteOrdersFlow];
