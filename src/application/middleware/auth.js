import {
  loadAuthSuccess,
  loadAuthFailed,
  loadIsAuthSuccess,
  loadIsAuthFailed,
  loadSignupSuccess,
  loadSignupFailed,
  loadValidationSuccess,
  loadValidationFailed,
  SIGNUP_ACTION,
  ISAUTH_ACTION,
  SIGNIN_ACTION,
  SIGNOUT_ACTION,
  EMAIL_VALIDATION,
} from "../actions/auth";
import * as uiActions from "../actions/ui";
import Cookies from "js-cookie";

const isAuthFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ISAUTH_ACTION) {
      try {
        dispatch(uiActions.setLoading(true));
        const auth = await api.auth.isSignin();
        dispatch(loadIsAuthSuccess(auth));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        console.log("Invalid credential user not authentication");
        dispatch(loadIsAuthFailed(err));
      }
    }
  };

const signupFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SIGNUP_ACTION) {
      next(action);
      try {
        dispatch(uiActions.setLoading(true));
        const response = await api.auth.signup(action.payload);
        loadSignupSuccess(response);
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadSignupFailed(err));
      }
    }
  };

const emailValidationFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EMAIL_VALIDATION) {
      try {
        dispatch(uiActions.setLoading(true));
        console.log("Email validation", action.payload);

        // const validate = await api.auth.validate(action.payload)
        // dispatch(loadValidationSuccess(validate))
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadValidationFailed(err));
      }
    }
  };

const signinFlow =
  ({ api }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type === SIGNIN_ACTION) {
      try {
        dispatch(uiActions.setLoading(true));
        const auth = await api.auth.signin(action.payload);
        Cookies.set("access-token", auth.token, { expires: 7 });

        setTimeout(
          // simulates an async action
          () => console.log(`action.payload ${action.payload}`, getState()),
          0
        );

        dispatch(loadAuthSuccess(auth));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(uiActions.setLoading(true));
        dispatch(loadAuthFailed(err));
        dispatch(uiActions.setLoading(false));
      }
    }
    next(action);
  };

const signoutFlow =
  () =>
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === SIGNOUT_ACTION) {
      dispatch(uiActions.setLoading(true));
      Cookies.remove("access-token");
      dispatch(uiActions.setLoading(false));
    }
    next(action);
  };

export default [
  signupFlow,
  isAuthFlow,
  signinFlow,
  signoutFlow,
  emailValidationFlow,
];
