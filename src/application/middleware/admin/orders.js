import * as ordersActions from "../../actions/admin/orders";
import * as uiActions from "../../actions/admin/ui";

const loadOrdersFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ordersActions.ADMIN_LOAD_ORDERS) {
      try {
        //   dispatch(uiActions.setLoading(true));
        const Orders = await api.admin.getAll();
        dispatch(ordersActions.loadOrdersSuccess(Orders));
        //   dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(ordersActions.loadOrdersFailed(err));
      }
    }
  };



export default [loadOrdersFlow];
