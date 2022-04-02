import Cookies from "js-cookie";
import {
  LOAD_AUTH,
  loadAuthValid,
  loadAuthInvalid,
  loadSiginSuccess,
  loadSigninFailed,
  SIGNUP,
  loadSignupSuccess,
  loadSignupFailed,
  SIGNOUT,
  loadSignoutSuccess,
  loadSignoutFailed,
  SIGNIN,
} from "../actions/auth";
import * as uiActions from "../actions/ui";

const loadAuthFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === LOAD_AUTH) {
      try {
        const auth = await api.auth.getAuthState(action.payload);
        if(auth.success == false){
          console.log("INVALID CREDENTIAL")
        }else{
          dispatch(loadAuthValid(auth));
          window.location.href("/")
        }
      } catch (error) {
        dispatch(loadAuthInvalid(error));
      }
    }
  };

const signinFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === SIGNIN) {
      try {
        const signin = await api.auth.signin(action.payload);

        Cookies.set("access-token", signin.token, { expires: 7 });
        dispatch(loadSiginSuccess(signin));
      } catch (error) {
        dispatch(loadSigninFailed(error));
      }
    }
  };

const signoutFlow =
  () =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === SIGNOUT) {
      Cookies.remove("access-token");
      loadSignoutSuccess(true);
    }
    next(action);
  };

export default [loadAuthFlow, signinFlow, signoutFlow];
