// =================== LOAD ORDER =================== 
export const LOAD_ORDERS = "[ORDERS] LOAD ORDERS";
export const LOAD_ORDERS_SUCCESS = "[ORDERS] LOAD ORDERS SUCCESS";
export const LOAD_ORDERS_FAILED = "[ORDERS] LOAD ORDERS FAILED";

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

// =================== LOAD USER ORDER =================== 
export const USER_ORDER = "[ORDERS] USER ORDER";
export const USER_ORDER_SUCCESS = "[ORDERS] USER ORDER SUCCESS";
export const USER_ORDER_FAILED = "[ORDERS] USER FAILED";

export const userOrder = (order) =>({
  type: USER_ORDER,
  payload: order,
})

export const userOrderSuccess  = {
  type: USER_ORDER_SUCCESS,
}

export const userOrderFailed = (error) => ({
  type: USER_ORDER_FAILED,
  payload: error,
});

// =================== LOAD USER ORDER COMPLETE ORDER =================== 
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
