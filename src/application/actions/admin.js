// ============================== IMAGES ACTION  ==============================
export const ADMIN_LOAD_IMAGES = "[admin.image] load";
export const ADMIN_LOAD_IMAGES_SUCCESS = "[admin.image] load success";
export const ADMIN_LOAD_IMAGES_FAILED = "[admin.image] load failed";
export const ADMIN_INSERT_IMAGE = "[admin.image] insert";
export const ADMIN_UPDATE_IMAGE = "[admin.image] update";
export const ADMIN_DELETE_IMAGE = "[admin.image] delete";

export const adminLoadImages = {
  type: ADMIN_LOAD_IMAGES,
};

export const adminLoadImagesSuccess = (image) => ({
  type: ADMIN_LOAD_IMAGES_SUCCESS,
  payload: image,
});

export const adminLoadImagesFailed = (error) => ({
  type: ADMIN_LOAD_IMAGES_FAILED,
  payload: error,
});

// ============================== ORDERS ACTION  ==============================
export const ADMIN_LOAD_ORDERS = "[ADMIN.ORDERS] LOAD";
export const ADMIN_LOAD_ORDERS_SUCCESS = "[ADMIN.ORDERS] LOAD SUCCESS";
export const ADMIN_LOAD_ORDERS_FAILED = "[ADMIN.ORDERS] LOAD SUCCESS";
export const ADMIN_INSERT_ORDERS = "[ADMIN.ORDERS] INSERT";
export const ADMIN_UPDATE_ORDERS = "[ADMIN.ORDERS] UPDATE";
export const ADMIN_DELETE_ORDERS = "[ADMIN.ORDERS] DELETE";

export const adminLoadOrders = {
  type: ADMIN_LOAD_ORDERS,
};

export const adminLoadOrdersSuccess = (orders) => ({
  type: ADMIN_LOAD_ORDERS_SUCCESS,
  payload: orders,
});

export const adminLoadOrdersFailed = (error) => ({
  type: ADMIN_LOAD_ORDERS_FAILED,
  payload: error,
});
