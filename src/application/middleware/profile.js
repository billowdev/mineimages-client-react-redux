import {
  loadProfileSuccess,
  loadProfileFailed,
  LOAD_PROFILE,
  UPLOAD_AVARTAR,
  UPDATE_PROFILE,
  updateProfileSuccess,
  uploadAvartarSuccess,
  uploadAvartarFailed,
  LOAD_ALL_IMAGES_OWNED,
  loadAllImagesOwnedSuccess,
  loadAllImagesOwnedFailed,
  BENEFIT_COMPLETE_ORDERS,
  benefitCompleteOrdersSuccess,
  benefitCompleteOrdersFailed,
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
        dispatch(updateProfileSuccess(update));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadProfileFailed(err));
      }
    }
    if (action.type === LOAD_ALL_IMAGES_OWNED) {
      try {
        dispatch(uiActions.setLoading(true));
        const all = await api.profile.getAllImagesUserOwned();
        dispatch(loadAllImagesOwnedSuccess(all));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadAllImagesOwnedFailed(err));
      }
    }
    if (action.type === BENEFIT_COMPLETE_ORDERS) {
      try {
        dispatch(uiActions.setLoading(true));
        const all = await api.profile.getBenefitCompleteOrders();
        dispatch(benefitCompleteOrdersSuccess(all));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(benefitCompleteOrdersFailed(err));
      }
    }
  };

export default [loadProfileFlow];
