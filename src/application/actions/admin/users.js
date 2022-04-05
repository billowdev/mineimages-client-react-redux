// ================================================================================//
//                                 USERS ACTION                                   //
// ================================================================================//

export const ADMIN_LOAD_USERS = "[ADMIN.USERS] LOAD";
export const ADMIN_LOAD_USERS_SUCCESS = "[ADMIN.USERS] LOAD SUCCESS";
export const ADMIN_LOAD_USERS_FAILED = "[ADMIN.USERS] LOAD FAILED";

export const loadUsers = (url) => ({
  type: ADMIN_LOAD_USERS,
  payload: url,
});

export const loadUsersSuccess = (users) => ({
  type: ADMIN_LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersFailed = (error) => ({
  type: ADMIN_LOAD_USERS_FAILED,
  payload: error,
});

export const ADMIN_CREATE_USERS = "[ADMIN.USERS] CREATE";
export const ADMIN_CREATE_USERS_SUCCESS = "[ADMIN.USERS] CREATE SUCCESS";
export const ADMIN_CREATE_USERS_FAILED = "[ADMIN.USERS] CREATE FAILED";

export const createUsers = (users) => ({
  type: ADMIN_CREATE_USERS,
  payload: users,
});

export const createUsersSuccess = (users) => ({
  type: ADMIN_CREATE_USERS_SUCCESS,
  payload: users,
});

export const createUsersFailed = (error) => ({
  type: ADMIN_CREATE_USERS_FAILED,
  payload: error,
});

export const ADMIN_UPDATE_USERS = "[ADMIN.USERS] UPDATE";
export const ADMIN_UPDATE_USERS_SUCCESS = "[ADMIN.USERS] UPDATE SUCCESS";
export const ADMIN_UPDATE_USERS_FAILED = "[ADMIN.USERS] UPDATE FAILED";

export const updateUsers = (users) => ({
  type: ADMIN_UPDATE_USERS,
  payload: users,
});

export const updateUsersSuccess = (users) => ({
  type: ADMIN_UPDATE_USERS_SUCCESS,
  payload: users,
});

export const updateUsersFailed = (error) => ({
  type: ADMIN_UPDATE_USERS_FAILED,
  payload: error,
});

export const ADMIN_DELETE_USERS = "[ADMIN.USERS] DELETE ";
export const ADMIN_DELETE_USERS_SUCCESS = "[ADMIN.USERS.] DELETE SUCCESS";
export const ADMIN_DELETE_USERS_FAILED = "[ADMIN.USERS] ORDERS FAILED";

export const deleteUsers = (id) => ({
  type: ADMIN_DELETE_USERS,
  payload: id,
});

export const deleteUsersSuccess = (state) => ({
  type: ADMIN_DELETE_USERS_SUCCESS,
  payload: state,
});

export const deleteUsersFailed = (error) => ({
  type: ADMIN_DELETE_USERS_FAILED,
  payload: error,
});