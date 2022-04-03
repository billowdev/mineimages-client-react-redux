import {
	adminLoadImagesSuccess,
	adminLoadImagesFailed,
	ADMIN_LOAD_IMAGES,

	adminLoadOrdersSuccess,
	adminLoadOrdersFailed,
	ADMIN_LOAD_ORDERS,

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

	const adminLoadOrdersFlow =
	({ api }) =>
	({ dispatch }) =>
	(next) =>
	async (action) => {
	  next(action);
	  if (action.type === ADMIN_LOAD_ORDERS) {
		try {
		//   dispatch(uiActions.setLoading(true));
		  const Orders = await api.admin.getAll();
		  dispatch(adminLoadOrdersSuccess(Orders));
		//   dispatch(uiActions.setLoading(false));
		} catch (err) {
		  dispatch(adminLoadOrdersFailed(err));
		}
	  }
	};
  
  export default [adminLoadImagesFlow, adminLoadOrdersFlow];
  