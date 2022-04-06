
// ================================================================================//
//                                 Orders ACTION                                   //
// ================================================================================//
export const ADMIN_LOAD_ORDERS = "[ADMIN.ORDERS] LOAD";
export const ADMIN_LOAD_ORDERS_SUCCESS = "[ADMIN.ORDERS] LOAD SUCCESS";
export const ADMIN_LOAD_ORDERS_FAILED = "[ADMIN.ORDERS] LOAD SUCCESS";

export const loadOrders = (url) => ({
  type: ADMIN_LOAD_ORDERS,
  payload: url,
});
export const loadOrdersSuccess = (order) => ({
  type: ADMIN_LOAD_ORDERS_SUCCESS,
  payload: order,
});

export const loadOrdersFailed = (error) => ({
  type: ADMIN_LOAD_ORDERS_FAILED,
  payload: error,
});

export const ADMIN_CREATE_ORDERS = "[ADMIN.ORDER] CREATE";
export const ADMIN_CREATE_ORDERS_SUCCESS = "[ADMIN.ORDER] CREATE SUCCESS";
export const ADMIN_CREATE_ORDERS_FAILED = "[ADMIN.ORDER] CREATE FAILED";

export const createOrders = (order) => ({
  type: ADMIN_CREATE_ORDERS,
  payload: order,
});

export const createOrdersSuccess = (order) => ({
  type: ADMIN_CREATE_ORDERS_SUCCESS,
  payload: order,
});

export const createOrdersFailed = (error) => ({
  type: ADMIN_CREATE_ORDERS_FAILED,
  payload: error,
});

export const ADMIN_UPDATE_ORDERS = "[ORDER] UPDATE ORDER";
export const ADMIN_UPDATE_ORDERS_SUCCESS = "[ORDER] UPDATE ORDER SUCCESS";
export const ADMIN_UPDATE_ORDERS_FAILED = "[ORDER] UPDATE ORDER FAILED";

export const updateOrders = (order) => ({
  type: ADMIN_UPDATE_ORDERS,
  payload: order,
});

export const updateOrdersSuccess = (order) => ({
  type: ADMIN_UPDATE_ORDERS_SUCCESS,
  payload: order,
});

export const updateOrdersFailed = (error) => ({
  type: ADMIN_UPDATE_ORDERS_FAILED,
  payload: error,
});

export const ADMIN_DELETE_ORDERS = "[ADMIN.ORDERS] DELETE";
export const ADMIN_DELETE_ORDERS_SUCCESS = "[ADMIN.ORDERS] DELETE SUCCESS";
export const ADMIN_DELETE_ORDERS_FAILED = "[ADMIN.ORDERS] DELETE FAILED";

export const deleteOrders = (id) => ({
  type: ADMIN_DELETE_ORDERS,
  payload: id,
});

export const deleteOrdersSuccess = (state) => ({
  type: ADMIN_DELETE_ORDERS_SUCCESS,
  payload: state,
});

export const deleteOrdersFailed = (error) => ({
  type: ADMIN_DELETE_ORDERS_FAILED,
  payload: error,
});