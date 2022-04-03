import * as adminActions from "../actions/admin";

import * as uiActions from "../actions/ui";

const loadImagesFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === adminActions.ADMIN_LOAD_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.admin.getAll();
        dispatch(adminActions.loadImagesSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(adminActions.loadImagesFailed(err));
      }
    }
    if (action.type === adminActions.ADMIN_INSERT_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.admin.createImages(action.payload);
        dispatch(adminActions.InsertImagesSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(adminActions.InsertImagesFailed(err));
      }
    }
  };

const loadOrdersFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === adminActions.ADMIN_LOAD_ORDERS) {
      try {
        //   dispatch(uiActions.setLoading(true));
        const Orders = await api.admin.getAll();
        dispatch(adminActions.loadOrdersSuccess(Orders));
        //   dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(adminActions.loadOrdersFailed(err));
      }
    }
  };


  const loadCategoriesFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === adminActions.ADMIN_UPDATE_CATEGORIES) {
      try {
        const Categories = await api.admin.updateCatefories(action.payload);
        dispatch(adminActions.updateCategoriesSuccess(Categories));
      } catch (err) {
        dispatch(adminActions.updateCategoriesFailed(err));
      }
    }
    if (action.type === adminActions.ADMIN_DELETE_CATEGORIES) {
      try {
        const Categories = await api.admin.deleteCategories(action.payload);
        dispatch(adminActions.deleteCategoriesSuccess(Categories));
      } catch (err) {
        dispatch(adminActions.deleteCategoriesFailed(err));
      }
    }
    if (action.type === adminActions.ADMIN_LOAD_CATEGORIES_BY_ID) {
      try {
        const Categories = await api.admin.getCategoriesById(action.payload);
        dispatch(adminActions.loadCategoriesByIdSuccess(Categories));
      } catch (err) {
        dispatch(adminActions.loadCategoriesByIdFailed(err));
      }
    }
  };

export default [loadImagesFlow, loadOrdersFlow, loadCategoriesFlow];
