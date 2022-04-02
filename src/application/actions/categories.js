export const LOAD_CATEGORIES = "[CATEGORIES] LOAD";
export const LOAD_CATEGORIES_SUCCESS = "[CATEGORIES] LOAD SUCCESS";
export const LOAD_CATEGORIES_FAILED = "[CATEGORIES] LOAD FAILED";

export const loadCategories = {
  type: LOAD_CATEGORIES,
};

export const loadCategoriesSuccess = (auth) => ({
  type: LOAD_CATEGORIES_SUCCESS,
  payload: auth,
});

export const loadCategoriesFailed = (error) => ({
  type: LOAD_CATEGORIES_FAILED,
  payload: error,
});
