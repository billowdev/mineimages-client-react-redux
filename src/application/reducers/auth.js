import {
  LOAD_AUTH_SUCCESS,
  SIGNOUT_ACTION,
  LOAD_ISAUTH_SUCCESS,
} from "../actions/auth";

const initialState = {
  isAuth: false,
  id: null,
  permission: null,
  email: null,
  firstName: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AUTH_SUCCESS:
      return {
        isAuth: true,
        id: action.payload.id,
        firstName: action.payload.firstName,
        permission: action.payload.permission,
        error: null,
      };
    case LOAD_ISAUTH_SUCCESS:
      return {
        isAuth: true,
        id: action.payload.id,
        firstName: action.payload.firstName,
        permission: action.payload.permission,
        error: null,
      };
    case SIGNOUT_ACTION:
      return {
        isAuth: false,
        id: null,
        permission: null,
        email: null,
        firstName: null,
        error: null,
      };
    default:
      return state;
  }
};
export default reducer;
