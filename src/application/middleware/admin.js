import {
	ADMIN_LOAD_IMAGES,
	ADMIN_INSERT_IMAGES,
	ADMIN_UPDATE_IMAGES,
	ADMIN_DELETE_IMAGES,
	loadImagesSuccess,
	insertImagesSuccess,
	updateImagesSuccess,
	deleteImagesSuccess,
	loadImagesFailed,
	insertImagesFailed,
	updateImagesFailed,
	deleteImagesFailed,

	ADMIN_LOAD_ORDERS,
	ADMIN_INSERT_ORDERS,
	ADMIN_UPDATE_ORDERS,
	ADMIN_DELETE_ORDERS,
	insertOrdersSuccess,
	loadOrdersSuccess,
	deleteOrdersSuccess,
	updateOrdersSuccess,
	loadOrdersFailed,
	insertOrdersFailed,
	updateOrdersFailed,
	deleteOrdersFailed,

  } from "../actions/admin";
  
  import * as uiActions from "../actions/ui";
  
  const loadImagesFlow =
	({ api }) =>
	({ dispatch }) =>
	(next) =>
	async (action) => {
	  next(action);
	  if (action.type === ADMIN_LOAD_IMAGES) {
		try {
		  dispatch(uiActions.setLoading(true));
		  const images = await api.admin.getAll();
		  dispatch(loadImagesSuccess(images));
		  dispatch(uiActions.setLoading(false));
		} catch (err) {
		  dispatch(loadImagesFailed(err));
		}
	  }
	};

	const loadOrdersFlow =
	({ api }) =>
	({ dispatch }) =>
	(next) =>
	async (action) => {
	  next(action);
	  if (action.type === ADMIN_LOAD_ORDERS) {
		try {
		//   dispatch(uiActions.setLoading(true));
		  const Orders = await api.admin.getAll();
		  dispatch(loadOrdersSuccess(Orders));
		//   dispatch(uiActions.setLoading(false));
		} catch (err) {
		  dispatch(loadOrdersFailed(err));
		}
	  }
	};
  
  export default [loadImagesFlow, loadOrdersFlow];
  