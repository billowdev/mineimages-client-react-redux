import {
	loadCategoriesSuccess,
	loadCategoriesFailed,
	LOAD_CATEGORIES,
  } from "../actions/categories";
  
  import * as uiActions from "../actions/ui";
  
  const loadCategoriesFlow =
	({ api }) =>
	({ dispatch }) =>
	(next) =>
	async (action) => {
	  next(action);
	  if (action.type === LOAD_CATEGORIES) {
		try {
		  dispatch(uiActions.setLoading(true));
		  const images = await api.categories.getAll();
		  dispatch(loadCategoriesSuccess(images));
		  dispatch(uiActions.setLoading(false));
		} catch (err) {
		  dispatch(loadCategoriesFailed(err));
		}
	  }
	};
  
  
  export default [loadCategoriesFlow];
  