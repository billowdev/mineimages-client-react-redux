import {
  loadImageSuccess,
  loadImageFailed,
  LOAD_IMAGES,
  PUT_IMAGE,
  setImages,
  GET_IMAGE_BY_ID,
  getImageByIdSuccess,
  GET_USER_IMAGES,
  getUserImagesSuccess,
  getUserImagesFailed,
  UPDATE_IMAGE,
  updateImageSuccess,
  updateImageFailed
} from "../actions/images";

import * as uiActions from "../actions/ui";

const loadImagesFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOAD_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.images.getAll();
        dispatch(loadImageSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadImageFailed(err));
      }
    }
  };

const putImageFlow =
  () =>
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === PUT_IMAGE) {
      const oldImageClone = getState().images.allImages.map((image) => ({
        ...image,
      }));

      const newImage = action.payload;

      const index = oldImageClone.findIndex(
        (image) => image.id === newImage.id
      );

      oldImageClone[index] = newImage;
      dispatch(setImages(oldImageClone));
    }
    next(action);
  };

const getImageByIdFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

   try{
    if(action.type === GET_IMAGE_BY_ID){
      console.log("On middleware get image by id : ", action.payload)
      const images = await api.images.getImageById(action.payload);
      dispatch(getImageByIdSuccess(images));
    }
   } catch(err){
     console.log("ERROR ON MIDDLEWARE images.getImageByIdFlow")
   }
  };


  const getUserImagesFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_USER_IMAGES) {
      try {
        dispatch(uiActions.setLoading(true));
        const images = await api.images.getUserImages(action.payload);
        dispatch(getUserImagesSuccess(images));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(getUserImagesFailed(err));
      }
    }
  };

  const updateImageFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === UPDATE_IMAGE) {
      try {
        dispatch(uiActions.setLoading(true));
        const changeVisibleResp = await api.images.updateImage(action.payload);
        // console.log("On middleware:",action.payload)
        // console.log(`Change visible resp on middleware ${changeVisibleResp}`)
        dispatch(updateImageSuccess(true));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(updateImageFailed(err));
      }
    }
  };


export default [loadImagesFlow, putImageFlow, getImageByIdFlow, getUserImagesFlow, updateImageFlow];
