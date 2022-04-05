// ================================================================================//
//                                Categories ACTION                                //
// ================================================================================//

export const ADMIN_INSERT_CATEGORIES = "[ADMIN.CATEGORIES] INSERT";
export const ADMIN_INSERT_CATEGORIES_SUCCESS = "[ADMIN.CATEGORIES] INSERT SUCCESS";
export const ADMIN_INSERT_CATEGORIES_FAILED = "[ADMIN.CATEGORIES] INSERT FAILED";

export const InsertCategories = (category) => ({
  type: ADMIN_INSERT_CATEGORIES,
  payload: category,
});

export const InsertCategoriesSuccess = (category) => ({
  type: ADMIN_INSERT_CATEGORIES_SUCCESS,
  payload: category,
});

export const InsertCategoriesFailed = (error) => ({
  type: ADMIN_INSERT_CATEGORIES_FAILED,
  payload: error,
});

export const ADMIN_UPDATE_CATEGORIES = "[ADMIN.CATEGORIES] UPDATE ";
export const ADMIN_UPDATE_CATEGORIES_SUCCESS = "[ADMIN.CATEGORIES] UPDATE SUCCESS";
export const ADMIN_UPDATE_CATEGORIES_FAILED = "[ADMIN.CATEGORIES] UPDATE FAILED";

export const updateCategories = (category) => ({
  type: ADMIN_UPDATE_CATEGORIES,
  payload: category,
});

export const updateCategoriesSuccess = (category) => ({
  type: ADMIN_UPDATE_CATEGORIES_SUCCESS,
  payload: category,
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

export const loadCategoriesByIdSuccess = (category) => ({
  type: ADMIN_LOAD_CATEGORIES_BY_ID_SUCCESS,
  payload: category,
});

export const loadCategoriesByIdFailed = (error) => ({
  type: ADMIN_LOAD_CATEGORIES_BY_ID_FAILED,
  payload: error,
});