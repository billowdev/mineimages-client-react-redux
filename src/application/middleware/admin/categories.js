import * as categoriesActions from "../../actions/admin/categories";
import * as uiActions from "../../actions/admin/ui";

  const loadCategoriesFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === categoriesActions.ADMIN_UPDATE_CATEGORIES) {
      try {
        const Categories = await api.admin.updateCatefories(action.payload);
        dispatch(categoriesActions.updateCategoriesSuccess(Categories));
      } catch (err) {
        dispatch(categoriesActions.updateCategoriesFailed(err));
      }
    }
    if (action.type === categoriesActions.ADMIN_DELETE_CATEGORIES) {
      try {
        const Categories = await api.admin.deleteCategories(action.payload);
        dispatch(categoriesActions.deleteCategoriesSuccess(Categories));
      } catch (err) {
        dispatch(categoriesActions.deleteCategoriesFailed(err));
      }
    }
    
    if (action.type === categoriesActions.ADMIN_LOAD_CATEGORIES_BY_ID) {
      try {
        const Categories = await api.admin.getCategoriesById(action.payload);
        dispatch(categoriesActions.loadCategoriesByIdSuccess(Categories));
      } catch (err) {
        dispatch(categoriesActions.loadCategoriesByIdFailed(err));
      }
    }
    if (action.type === categoriesActions.ADMIN_INSERT_CATEGORIES) {
      try {
        const Categories = await api.admin.createCategories(action.payload);
        console.log(Categories)
        if(Categories.success){
          dispatch(categoriesActions.InsertCategoriesSuccess(Categories));
        }else{
          dispatch(categoriesActions.InsertCategoriesFailed(Categories.msg));
        }
      } catch (err) {
        dispatch(categoriesActions.InsertCategoriesFailed(err));
      }
    }
  };

export default [loadCategoriesFlow];
