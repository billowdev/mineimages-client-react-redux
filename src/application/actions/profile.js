export const LOAD_PROFILE = "[profile] load";
export const LOAD_PROFILE_SUCCESS = "[profile] load success";
export const LOAD_PROFILE_FAILED = "[profile] load failed";

export const loadProfile = {
  type: LOAD_PROFILE,
};

export const loadProfileSuccess = (profile) => ({
  type: LOAD_PROFILE_SUCCESS,
  payload: profile,
});

export const loadProfileFailed = (error) => ({
  type: LOAD_PROFILE_FAILED,
  payload: error,
});
