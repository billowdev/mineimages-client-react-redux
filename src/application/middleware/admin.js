import {
  adminLoadImageSuccess,
  adminLoadImageFailed,
  ADMIN_LOAD_IMAGES,
  PUT_IMAGE,
  setImages,
  GET_IMAGE_BY_ID,
  getImageByIdSuccess,
} from "../actions/images";

import * as uiActions from "../actions/ui";

const adminLoadImagesFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOAD_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.admin.getAll();
        dispatch(loadImageSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadImageFailed(err));
      }
    }
  };

export default [adminLoadImagesFlow];
