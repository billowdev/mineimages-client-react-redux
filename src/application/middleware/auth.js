import {
  loadAuthSuccess,
  loadAuthFailed,
  LOAD_AUTH,
  loadSigup,
  SIGNUP_ACTION,
  ISAUTH_ACTION,
  SIGNIN_ACTION,
  SIGNOUT_ACTION,
} from "../actions/auth";
import * as uiActions from "../actions/ui";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

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
        dispatch(loadAuthSuccess(auth));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        console.log("Invalid credential user not authentication");
        dispatch(loadAuthFailed(err));
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
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadAuthFailed(err));
      }
    }
  };

const signinFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SIGNIN_ACTION) {
      try {
        dispatch(uiActions.setLoading(true));
        const auth = await api.auth.signin(action.payload);
        Cookies.set("access-token", auth.token, { expires: 7 });
        dispatch(loadAuthSuccess(auth));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadAuthFailed(err));
      }
    }
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

export default [signupFlow, isAuthFlow, signinFlow, signoutFlow];
