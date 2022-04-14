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

export const LOAD_ALL_IMAGES_OWNED = "[ALL_IMAGES_OWNED] load";
export const LOAD_ALL_IMAGES_OWNED_SUCCESS = "[ALL_IMAGES_OWNED] LOAD SUCCESS";
export const LOAD_ALL_IMAGES_OWNED_FAILED = "[ALL_IMAGES_OWNED] LOAD FAILED";

export const loadAllImagesOwned = {
  type: LOAD_ALL_IMAGES_OWNED,
};

export const loadAllImagesOwnedSuccess = (images) => ({
  type: LOAD_ALL_IMAGES_OWNED_SUCCESS,
  payload: images,
});

export const loadAllImagesOwnedFailed = (error) => ({
  type: LOAD_ALL_IMAGES_OWNED_FAILED,
  payload: error,
});

export const BENEFIT_COMPLETE_ORDERS = "[BENEFIT_COMPLETE_ORDERS] load";
export const BENEFIT_COMPLETE_ORDERS_SUCCESS =
  "[BENEFIT_COMPLETE_ORDERS] LOAD SUCCESS";
export const BENEFIT_COMPLETE_ORDERS_FAILED =
  "[BENEFIT_COMPLETE_ORDERS] LOAD FAILED";

export const benefitCompleteOrders = {
  type: BENEFIT_COMPLETE_ORDERS,
};

export const benefitCompleteOrdersSuccess = (orders) => ({
  type: BENEFIT_COMPLETE_ORDERS_SUCCESS,
  payload: orders,
});

export const benefitCompleteOrdersFailed = (error) => ({
  type: BENEFIT_COMPLETE_ORDERS_FAILED,
  payload: error,
});
