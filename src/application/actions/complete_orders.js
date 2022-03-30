export const LOAD_COMPLETE_ORDERS = "[COMPLETE_ORDER] load complete order";
export const LOAD_COMPLETE_ORDERS_SUCCESS = "[COMPLETE_ORDER] load complete order success";
export const LOAD_COMPLETE_ORDERS_FAILED = "[COMPLETE_ORDER] load complete order failed";

export const loadCompleteOrders = {
  type: LOAD_COMPLETE_ORDERS,
};

export const loadCompleteOrdersSuccess = (complete_orders) => ({
  type: LOAD_COMPLETE_ORDERS_SUCCESS,
  payload: complete_orders,
});

export const loadCompleteOrdersFailed = (error) => ({
  type: LOAD_COMPLETE_ORDERS_FAILED,
  payload: error,
});

