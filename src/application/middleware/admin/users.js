import * as usersActions from "../../actions/admin/users";
import * as uiActions from "../../actions/admin/ui";

const loadUsersFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === usersActions.ADMIN_LOAD_USERS) {
      try {
        dispatch(uiActions.setLoading(true));
        const users = await api.admin.getAllUsers(action.payload);
        dispatch(usersActions.loadUsersSuccess(users));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(usersActions.loadUsersFailed(err));
      }
    }
    if (action.type === usersActions.ADMIN_CREATE_USERS) {
      try {
        dispatch(uiActions.setLoading(true));
        const users = await api.admin.createUsersData(action.payload);
        dispatch(usersActions.createUsersSuccess(users));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(usersActions.createUsersFailed(err));
      }
    }
	if (action.type === usersActions.ADMIN_UPDATE_USERS) {
		try {
		  dispatch(uiActions.setLoading(true));
		  const users = await api.admin.updateUsersData(action.payload);
		  dispatch(usersActions.updateUsersSuccess(users));
		  dispatch(uiActions.setLoading(false));
		} catch (err) {
		  dispatch(usersActions.updateUsersFailed(err));
		}
	  }
  };

export default [loadUsersFlow];
