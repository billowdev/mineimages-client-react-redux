import {
	adminLoadImagesSuccess,
	adminLoadImagesFailed,
	ADMIN_LOAD_IMAGES,

  } from "../actions/admin";
  
  import * as uiActions from "../actions/ui";
  
  const adminLoadImagesFlow =
	({ api }) =>
	({ dispatch }) =>
	(next) =>
	async (action) => {
	  next(action);
	  if (action.type === ADMIN_LOAD_IMAGES) {
		try {
		  dispatch(uiActions.setLoading(true));
		  const images = await api.admin.getAll();
		  dispatch(adminLoadImagesSuccess(images));
		  dispatch(uiActions.setLoading(false));
		} catch (err) {
		  dispatch(adminLoadImagesFailed(err));
		}
	  }
	};
  
  export default [adminLoadImagesFlow];
  