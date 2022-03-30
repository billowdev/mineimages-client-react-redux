export const LOAD_PROFILE = "[profile] load";
export const LOAD_PROFILE_SUCCESS = "[profile] load success";
export const LOAD_PROFILE_FAILED = "[profile] load failed";

export const UPLOAD_AVARTAR = "[profile] upload avartar";
export const UPDATE_PROFILE = "[profile] update profile";

export const UPLOAD_AVARTAR_SUCCESS = "[profile] upload success";
export const UPLOAD_AVARTAR_FAILED = "[profile] upload failed";

export const UPDATE_PROFILE_SUCCESS = "[profile] update profile-success";


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


export const updateProfile = (profile) =>({
  type: UPDATE_PROFILE,
  payload: profile
})

export const updateProfileSuccess = (profile) =>({
  type: UPDATE_PROFILE_SUCCESS,
  payload: profile
})