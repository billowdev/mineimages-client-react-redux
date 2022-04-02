// ============================== SIGNIN ACTION  ==============================
export const SIGNIN = "[SIGNIN] SIGIN";
export const SIGNIN_SUCCESS = "[SIGNIN] SIGIN success";
export const SIGNIN_FAILED = "[SIGNIN] SIGIN FAILED";

export const loadSignin = (signin) => ({
  type: SIGNIN,
  payload: signin,
});

export const loadSiginSuccess = (signin) => ({
  type: SIGNIN_SUCCESS,
  payload: signin,
});

export const loadSigninFailed = (error) => ({
  type: SIGNIN_FAILED,
  payload: error,
});

// ============================== SIGNUP ACTION  ==============================

export const SIGNUP = "[SIGNUP] SIGNUP";
export const SIGNUP_SUCCESS = "[SIGNUP] SIGNUP SUCCESS";
export const SIGNUP_FAILED = "[SIGNUP] SIGNUP FAILED";

export const loadSignup = (signup) => ({
  type: SIGNUP,
  payload: signup,
});

export const loadSignupSuccess = (SIGNUP) => ({
  type: SIGNUP_SUCCESS,
  payload: SIGNUP,
});

export const loadSignupFailed = (error) => ({
  type: SIGNUP_FAILED,
  payload: error,
});

// ============================== EMAIL VALIDATION ACTION  ==============================
export const EMAIL_VALIDATION = "[EMAIL_VALIDATION] EMAIL_VALIDATION";
export const EMAIL_VALIDATION_SUCCESS =
  "[EMAIL_VALIDATION] EMAIL_VALIDATION SUCCESS";
export const EMAIL_VALIDATION_FAILED =
  "[EMAIL_VALIDATION] EMAIL_VALIDATION FAILED";

export const loadEmailValidation = (validation) => ({
  type: EMAIL_VALIDATION,
  payload: validation,
});

export const loadEmailValidationSuccess = (validation) => ({
  type: EMAIL_VALIDATION_SUCCESS,
  payload: validation,
});

export const loadEmailValidationFailed = (error) => ({
  type: EMAIL_VALIDATION_FAILED,
  payload: error,
});

// ============================== SIGNOUT ACTION  ==============================
export const SIGNOUT = "[SIGNOUT] SIGNOUT";
export const SIGNOUT_SUCCESS = "[SIGNOUT] SIGNOUT SUCCESS";
export const SIGNOUT_FAILED = "[SIGNOUT] SIGNOUT FAILED";

export const loadSignout = {
  type: SIGNOUT,
};

export const loadSignoutSuccess = (signout) => ({
  type: SIGNOUT_SUCCESS,
  payload: signout,
});

export const loadSignoutFailed = (error) => ({
  type: SIGNOUT_FAILED,
  payload: error,
});

// ============================== LOAD AUTH ACTION  ==============================
export const LOAD_AUTH = "[AUTH] LOAD AUTH";
export const LOAD_AUTH_VALID = "[AUTH] VALID CREDENTIAL";
export const LOAD_AUTH_INVALID = "[AUTH] INVALID CREDENTIAL";

export const loadAuth = (auth) => ({
  type: LOAD_AUTH,
  payload: auth,
});

export const loadAuthValid = (auth) => ({
  type: LOAD_AUTH_VALID,
  payload: auth,
});

export const loadAuthInvalid = (error) => ({
  type: LOAD_AUTH_INVALID,
  payload: error,
});
