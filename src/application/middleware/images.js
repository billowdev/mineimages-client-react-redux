import {
  loadImageSuccess,
  loadImageFailed,
  LOAD_IMAGES,
  PUT_IMAGE,
  setImages,
  GET_IMAGE_BY_ID,
  getImageByIdSuccess,
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
export default [loadImagesFlow, putImageFlow, getImageByIdFlow];
