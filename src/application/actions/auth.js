export const LOAD_AUTH = "[auth] load";
export const LOAD_AUTH_SUCCESS = "[auth] load success";
export const LOAD_AUTH_FAILED = "[auth] load failed";
export const LOAD_SIGNUP_SUCCESS = "[auth] signup success";
export const LOAD_SIGNUP_FAILED = "[auth] signup failed";

export const ISAUTH_ACTION = "[auth] is auth";
export const SIGNUP_ACTION = "[auth] signup";
export const SIGNIN_ACTION = "[auth] signin";
export const SIGNOUT_ACTION = "[auth] signout";

export const loadAuth = {
  type: LOAD_AUTH,
};

export const loadSignupSuccess = (signup) => ({
  type: LOAD_SIGNUP_SUCCESS,
  payload: signup,
});

export const loadSignupFailed = (error) => ({
  type: LOAD_SIGNUP_FAILED,
  payload: error,
});

export const loadAuthSuccess = (auth) => ({
  type: LOAD_AUTH_SUCCESS,
  payload: auth,
});

export const loadAuthFailed = (error) => ({
  type: LOAD_AUTH_FAILED,
  payload: error,
});

export const isAuthAction = (auth) => ({
  type: ISAUTH_ACTION,
  payload: auth,
});

export const signupAction = (auth) => ({
  type: SIGNUP_ACTION,
  payload: auth,
});

export const signinAction = (auth) => ({
  type: SIGNIN_ACTION,
  payload: auth,
});

export const signoutAction = (auth) => ({
  type: SIGNOUT_ACTION,
  payload: auth,
});
