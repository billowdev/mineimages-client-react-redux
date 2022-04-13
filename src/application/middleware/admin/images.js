import * as imagesActions from "../../actions/admin/images";
import * as uiActions from "../../actions/admin/ui";

const loadImagesFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === imagesActions.ADMIN_LOAD_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.admin.getAllImages(action.payload);
        console.log(`on images admin middle ware`, images)
        dispatch(imagesActions.loadImagesSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.loadImagesFailed(err));
      }
    }
    if (action.type === imagesActions.ADMIN_CREATE_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.admin.createImages(action.payload);
        dispatch(imagesActions.createImagesSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.createImagesFailed(err));
      }
    }
    if (action.type === imagesActions.ADMIN_LOAD_IMAGES_BY_ID) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.admin.getImageById(action.payload);
        dispatch(imagesActions.loadImagesByIdSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.loadImagesByIdFailed(err));
      }
    }
    if (action.type === imagesActions.ADMIN_UPDATE_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.admin.updateImage(action.payload);
        dispatch(imagesActions.updateImagesSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.updateImagesFailed(err));
      }
    }
  };

export default [loadImagesFlow];
