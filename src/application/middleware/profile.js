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
        dispatch(loadProfileSuccess(profile));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadProfileFailed(err));
      }
    }
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

    if (action.type === UPDATE_PROFILE) {
      try {
        dispatch(uiActions.setLoading(true));
        const update = await api.profile.updateProfile(action.payload);
        console.log("On middleware profile updateProfile: ", update);
        dispatch(updateProfileSuccess(update));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadProfileFailed(err));
      }
    }
  };

export default [loadProfileFlow];
