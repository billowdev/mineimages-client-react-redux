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
    if (action.type === usersActions.ADMIN_DELETE_USERS) {
      try {
        dispatch(uiActions.setLoading(true));
        const users = await api.admin.deleteUserData(action.payload);
        dispatch(usersActions.deleteUsersSuccess(users));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(usersActions.deleteUsersFailed(err));
      }
      }
      if (action.type === usersActions.ADMIN_CREATE_USERS) {
        try {
          dispatch(uiActions.setLoading(true));
          console.log("on muiddle ware users")
          const users = await api.admin.createUsers(action.payload);
          dispatch(usersActions.createUsersSuccess(users));
          dispatch(uiActions.setLoading(false));
        } catch (err) {
          console.log("user middleware",err)
          dispatch(usersActions.createUsersFailed(err));
        }
        }
  };

export default [loadUsersFlow];
