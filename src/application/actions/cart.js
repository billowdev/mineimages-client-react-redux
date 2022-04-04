// =================== LOAD ORDER ===================
export const LOAD_ONCART_ORDERS = "[ONCART_ORDERS] LOAD";
export const LOAD_ONCART_ORDERS_SUCCESS = "[ONCART_ORDERS] LOAD SUCCESS";
export const LOAD_ONCART_ORDERS_FAILED = "[ONCART_ORDERS] LOAD FAILED";

export const loadOnCartOrders = {
  type: LOAD_ONCART_ORDERS,
};

export const loadOnCartOrdersSuccess = (orders) => ({
  type: LOAD_ONCART_ORDERS_SUCCESS,
  payload: orders,
});

export const loadOnCartOrdersFailed = (error) => ({
  type: LOAD_ONCART_ORDERS_FAILED,
  payload: error,
});
