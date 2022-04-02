// =================== LOAD PROFILE DATA =================== 
export const LOAD_PROFILE = "[PROFILE] load";
export const LOAD_PROFILE_SUCCESS = "[PROFILE] LOAD SUCCESS";
export const LOAD_PROFILE_FAILED = "[PROFILE] LOAD FAILED";

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

export const UPLOAD_AVARTAR = "[PROFILE] UPLOAD AVARTAR";
export const UPLOAD_AVARTAR_SUCCESS = "[PROFILE] upload success";
export const UPLOAD_AVARTAR_FAILED = "[profilPROFILEe] upLOAD FAILED";

export const uploadAvartar = (profile) => ({
  type: UPLOAD_AVARTAR,
  payload: profile,
});

export const uploadAvartarSuccess = (profile) => ({
  type: UPLOAD_AVARTAR_SUCCESS,
  payload: profile,
});
export const uploadAvartarFailed = (error) => ({
  type: UPLOAD_AVARTAR_FAILED,
  payload: error,
});

export const UPDATE_PROFILE = "[PROFILE] UPDATE";
export const UPDATE_PROFILE_SUCCESS = "[PROFILE] UPDATE SUCCESS";

export const updateProfile = (profile) => ({
  type: UPDATE_PROFILE,
  payload: profile,
});

export const updateProfileSuccess = (profile) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: profile,
});
