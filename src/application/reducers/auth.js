import {
  LOAD_AUTH_SUCCESS,
  SIGNIN_ACTION,
  SIGNUP_ACTION,
  SIGNOUT_ACTION,
  LOAD_AUTH_FAILED,
  ISAUTH_ACTION,
} from "../actions/auth";

const initialState = {
  isAuth: false,
  id: null,
  permission: null,
  email: null,
  firstName: null,
  isSignupSuccess: false,
  isValidateSuccess: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === LOAD_AUTH_SUCCESS) {
    return {
      isAuth: true,
      id: action.payload.id,
      firstName: action.payload.firstName,
      permission: action.payload.permission,
      error: null,
    };
  } else if (action.type === SIGNOUT_ACTION) {
    return {
      isAuth: false,
      id: null,
      permission: null,
      email: null,
      firstName: null,
      error: null,
    };
  } else {
    return state;
  }
};
export default reducer;
