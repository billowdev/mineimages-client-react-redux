export const LOAD_AUTH = "[auth] load";
export const LOAD_AUTH_SUCCESS = "[auth] load success";
export const LOAD_AUTH_FAILED = "[auth] load failed";
export const LOAD_SIGNUP_SUCCESS = "[auth] signup success";
export const LOAD_SIGNUP_FAILED = "[auth] signup failed";

export const EMAIL_VALIDATION = "[auth] validation";
export const LOAD_VALIDATION_SUCCESS = "[auth] validation success";
export const LOAD_VALIDATION_FAILED = "[auth] validation failed";

export const LOAD_ISAUTH_SUCCESS = "[auth] valid credential ";
export const LOAD_ISAUTH_FAILED = "[auth] invalid credential !";

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

export const emailValidation = (validate) =>({
  type: EMAIL_VALIDATION,
  payload: validate
})

export const loadValidationSuccess = (validate) => ({
  type: LOAD_VALIDATION_SUCCESS,
  payload: validate,
});

export const loadValidationFailed = (error) => ({
  type: LOAD_VALIDATION_FAILED,
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

export const loadIsAuthSuccess = (auth) => ({
  type: LOAD_ISAUTH_SUCCESS,
  payload: auth,
});

export const loadIsAuthFailed = (error) => ({
  type: LOAD_ISAUTH_FAILED,
  payload: error,
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
