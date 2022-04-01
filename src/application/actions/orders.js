export const LOAD_ORDERS = "[profile] load order";
export const LOAD_ORDERS_SUCCESS = "[profile] load order success";
export const LOAD_ORDERS_FAILED = "[profile] load order failed";
export const USER_ORDERS = "[profile] user order";

export const loadOrders = (url) => ({
  type: LOAD_ORDERS,
  payload: url,
});

export const loadOrdersSuccess = (orders) => ({
  type: LOAD_ORDERS_SUCCESS,
  payload: orders,
});

export const loadOrdersFailed = (error) => ({
  type: LOAD_ORDERS_FAILED,
  payload: error,
});
