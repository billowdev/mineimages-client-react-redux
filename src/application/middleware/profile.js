import {
  loadProfileSuccess,
  loadProfileFailed,
  LOAD_PROFILE,
  UPLOAD_AVARTAR,
  UPDATE_PROFILE,
  updateProfileSuccess,
  uploadAvartarSuccess,
  uploadAvartarFailed,
} from "../actions/profile";

import * as uiActions from "../actions/ui";

const loadProfileFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOAD_PROFILE) {
      try {
        dispatch(uiActions.setLoading(true));
        const profile = await api.profile.getProfile();
        // console.log("on middle ware profile", profile)
        dispatch(loadProfileSuccess(profile));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadProfileFailed(err));
      }
    }
  };

const uploadAvartarFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === UPLOAD_AVARTAR) {
      try {
        dispatch(uiActions.setLoading(true));
        const upload = await api.profile.uploadAvartar(action.payload);
        dispatch(uploadAvartarSuccess(upload));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(uploadAvartarFailed(err));
      }
    }
  };

const updateProfileFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === UPDATE_PROFILE) {
      try {
        dispatch(uiActions.setLoading(true));
        // console.log("On middleware profile update profile : action=", action.payload);
        const update = await api.profile.updateProfile(action.payload);
        console.log("On middleware profile updateProfile: ", update);
        dispatch(updateProfileSuccess(update));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadProfileFailed(err));
      }
    }
  };

export default [loadProfileFlow, uploadAvartarFlow, updateProfileFlow];
