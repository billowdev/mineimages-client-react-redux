import * as checkoutActions from "../actions/checkout";
  
  const loadCheckoutFlow =
	({ api }) =>
	({ dispatch }) =>
	(next) =>
	async (action) => {
	  next(action);
	  if (action.type === checkoutActions.LOAD_CHECKOUT) {
		try {
		  const resp = await api.checkout.checkoutOrders();
		  dispatch(checkoutActions.loadCheckoutSuccess(resp));
		} catch (err) {
		  dispatch(checkoutActions.loadCheckoutFailed(err));
		}
	  }
	};
  
  export default [loadCheckoutFlow];
  