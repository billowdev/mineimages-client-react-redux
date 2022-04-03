// ================================================================================//
//                                 Images ACTION                                   //
// ================================================================================//

export const ADMIN_LOAD_IMAGES = "[ADMIN.IMAGES] LOAD";
export const ADMIN_LOAD_IMAGES_SUCCESS = "[ADMIN.IMAGES] LOAD SUCCESS";
export const ADMIN_LOAD_IMAGES_FAILED = "[ADMIN.IMAGES] LOAD FAILED";

export const loadImages = (url) => ({
  type: ADMIN_LOAD_IMAGES,
  payload: url,
});

export const loadImagesSuccess = (image) => ({
  type: ADMIN_LOAD_IMAGES_SUCCESS,
  payload: image,
});

export const loadImagesFailed = (error) => ({
  type: ADMIN_LOAD_IMAGES_FAILED,
  payload: error,
});

export const ADMIN_INSERT_IMAGES = "[ADMIN.IMAGES] INSERT";
export const ADMIN_INSERT_IMAGES_SUCCESS = "[ADMIN.IMAGES] INSERT SUCCESS";
export const ADMIN_INSERT_IMAGES_FAILED = "[ADMIN.IMAGES] INSERT FAILED";

export const InsertImages = (image) => ({
  type: ADMIN_INSERT_IMAGES,
  payload: image,
});

export const InsertImagesSuccess = (image) => ({
  type: ADMIN_INSERT_IMAGES_SUCCESS,
  payload: image,
});

export const InsertImagesFailed = (error) => ({
  type: ADMIN_INSERT_IMAGES_FAILED,
  payload: error,
});

export const ADMIN_UPDATE_IMAGES = "[ADMIN.IMAGES] UPDATE";
export const ADMIN_UPDATE_IMAGES_SUCCESS = "[ADMIN.IMAGES] UPDATE SUCCESS";
export const ADMIN_UPDATE_IMAGES_FAILED = "[ADMIN.IMAGES] UPDATE FAILED";

export const updateImages = (image) => ({
  type: ADMIN_UPDATE_IMAGES,
  payload: image,
});

export const updateImagesSuccess = (image) => ({
  type: ADMIN_UPDATE_IMAGES_SUCCESS,
  payload: image,
});

export const updateImagesFailed = (error) => ({
  type: ADMIN_UPDATE_IMAGES_FAILED,
  payload: error,
});

export const ADMIN_DELETE_IMAGES = "[ADMIN.IMAGES] DELETE ";
export const ADMIN_DELETE_IMAGES_SUCCESS = "[ADMIN.IMAGES.] DELETE SUCCESS";
export const ADMIN_DELETE_IMAGES_FAILED = "[ADMIN.IMAGES] ORDERS FAILED";

export const deleteImages = (id) => ({
  type: ADMIN_DELETE_IMAGES,
  payload: id,
});

export const deleteImagesSuccess = (state) => ({
  type: ADMIN_DELETE_IMAGES_SUCCESS,
  payload: state,
});

export const deleteImagesFailed = (error) => ({
  type: ADMIN_DELETE_IMAGES_FAILED,
  payload: error,
});

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

export const ADMIN_INSERT_ORDERS = "[ADMIN.ORDER] INSERT";
export const ADMIN_INSERT_ORDERS_SUCCESS = "[ADMIN.ORDER] INSERT SUCCESS";
export const ADMIN_INSERT_ORDERS_FAILED = "[ADMIN.ORDER] INSERT FAILED";

export const InsertOrders = (order) => ({
  type: ADMIN_INSERT_ORDERS,
  payload: order,
});

export const InsertOrdersSuccess = (order) => ({
  type: ADMIN_INSERT_ORDERS_SUCCESS,
  payload: order,
});

export const InsertOrdersFailed = (error) => ({
  type: ADMIN_INSERT_ORDERS_FAILED,
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

// ================================================================================//
//                                Categories ACTION                                //
// ================================================================================//

export const ADMIN_INSERT_CATEGORIES = "[ADMIN.CATEGORIES] INSERT";
export const ADMIN_INSERT_CATEGORIES_SUCCESS = "[ADMIN.CATEGORIES] INSERT SUCCESS";
export const ADMIN_INSERT_CATEGORIES_FAILED = "[ADMIN.CATEGORIES] INSERT FAILED";

export const InsertCategories = (categories) => ({
  type: ADMIN_INSERT_CATEGORIES,
  payload: categories,
});

export const InsertCategoriesSuccess = (order) => ({
  type: ADMIN_INSERT_CATEGORIES_SUCCESS,
  payload: order,
});

export const InsertCategoriesFailed = (error) => ({
  type: ADMIN_INSERT_CATEGORIES_FAILED,
  payload: error,
});

export const ADMIN_UPDATE_CATEGORIES = "[ADMIN.CATEGORIES] UPDATE ";
export const ADMIN_UPDATE_CATEGORIES_SUCCESS = "[ADMIN.CATEGORIES] UPDATE SUCCESS";
export const ADMIN_UPDATE_CATEGORIES_FAILED = "[ADMIN.CATEGORIES] UPDATE FAILED";

export const updateCategories = (order) => ({
  type: ADMIN_UPDATE_CATEGORIES,
  payload: order,
});

export const updateCategoriesSuccess = (order) => ({
  type: ADMIN_UPDATE_CATEGORIES_SUCCESS,
  payload: order,
});

export const updateCategoriesFailed = (error) => ({
  type: ADMIN_UPDATE_CATEGORIES_FAILED,
  payload: error,
});

export const ADMIN_DELETE_CATEGORIES = "[ADMIN.CATEGORIES] DELETE";
export const ADMIN_DELETE_CATEGORIES_SUCCESS = "[ADMIN.CATEGORIES] DELETE SUCCESS";
export const ADMIN_DELETE_CATEGORIES_FAILED = "[ADMIN.CATEGORIES] DELETE FAILED";

export const deleteCategories = (id) => ({
  type: ADMIN_DELETE_CATEGORIES,
  payload: id,
});

export const deleteCategoriesSuccess = (state) => ({
  type: ADMIN_DELETE_CATEGORIES_SUCCESS,
  payload: state,
});

export const deleteCategoriesFailed = (error) => ({
  type: ADMIN_DELETE_CATEGORIES_FAILED,
  payload: error,
});

export const ADMIN_LOAD_CATEGORIES_BY_ID = "[ADMIN.CATEGORIES] GET ID";
export const ADMIN_LOAD_CATEGORIES_BY_ID_SUCCESS = "[ADMIN.CATEGORIES] GET ID SUCCESS";
export const ADMIN_LOAD_CATEGORIES_BY_ID_FAILED = "[ADMIN.CATEGORIES] GET ID FAILED";

export const loadCategoriesById = (id) => ({
  type: ADMIN_LOAD_CATEGORIES_BY_ID,
  payload: id,
});

export const loadCategoriesByIdSuccess = (categories) => ({
  type: ADMIN_LOAD_CATEGORIES_BY_ID_SUCCESS,
  payload: categories,
});

export const loadCategoriesByIdFailed = (error) => ({
  type: ADMIN_LOAD_CATEGORIES_BY_ID_FAILED,
  payload: error,
});


// ================================================================================//
//                                Transactions ACTION                                //
// ================================================================================//
