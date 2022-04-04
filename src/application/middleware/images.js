import * as imagesActions from "../actions/images";
import * as uiActions from "../actions/ui";

const loadImagesFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === imagesActions.LOAD_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.images.getAll();
        dispatch(imagesActions.loadImageSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.loadImageFailed(err));
      }
    }
    if (action.type === imagesActions.GET_IMAGE_BY_ID) {
      try {
        // console.log(`ON IMAGE MIDDLEWARE ${action.payload}`)
        const images = await api.images.getImageById(action.payload);
        // console.log("On middleware get image by id : ", images)
        dispatch(imagesActions.getImageByIdSuccess(images));
      } catch (err) {
        imagesActions.getImageByIdFailed(err);
      }
    }
    if (action.type === imagesActions.UPLOAD_IMAGE) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.images.createImages(action.payload);
        if (images.success) {
          dispatch(imagesActions.uploadImageSuccess(images));
        } else {
          dispatch(imagesActions.uploadImageFailed(images));
        }
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.uploadImageFailed(err));
      }
    }
    if (action.type === imagesActions.GET_USER_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.images.getUserImages(action.payload);
        dispatch(imagesActions.getUserImagesSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.getUserImagesFailed(err));
      }
    }

    if (action.type === imagesActions.UPDATE_IMAGE) {
      try {
        dispatch(uiActions.setLoading(true));
        await api.images.updateImage(action.payload);
        dispatch(imagesActions.updateImageSuccess(true));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(imagesActions.updateImageFailed(err));
      }
    }

    if (action.type === imagesActions.USER_DELETE_IMAGE) {
      try {
        const deleteImage = await api.images.userDeleteImage(action.payload);
        if (deleteImage.success) {
          dispatch(imagesActions.userDeleteImageSuccess(deleteImage.msg));
        } else {
          dispatch(imagesActions.userDeleteImageFailed(deleteImage.msg));
        }
      } catch (err) {
        dispatch(imagesActions.userDeleteImageFailed(err));
      }
    }
  };

export default [loadImagesFlow];
