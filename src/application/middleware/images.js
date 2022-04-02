import {
  loadImageSuccess,
  loadImageFailed,
  LOAD_IMAGES,
  GET_IMAGE_BY_ID,
  getImageByIdSuccess,
  GET_USER_IMAGES,
  getUserImagesSuccess,
  getUserImagesFailed,
  UPDATE_IMAGE,
  updateImageSuccess,
  updateImageFailed,
  USER_DELETE_IMAGE,
  userDeleteImageSuccess,
  userDeleteImageFailed
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

const getImageByIdFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    try {
      if (action.type === GET_IMAGE_BY_ID) {
        // console.log(`ON IMAGE MIDDLEWARE ${action.payload}`)
        const images = await api.images.getImageById(action.payload);
        // console.log("On middleware get image by id : ", images)
        dispatch(getImageByIdSuccess(images));
      }
    } catch (err) {
      console.log("ERROR ON MIDDLEWARE images.getImageByIdFlow");
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
        await api.images.updateImage(action.payload);
        dispatch(updateImageSuccess(true));
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(updateImageFailed(err));
      }
    } 
  };

  const deleteImageFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === USER_DELETE_IMAGE) {
      try {
        console.log("on middle ware", action.payload)
        // await api.images.userDeleteImage(action.payload);
        dispatch(userDeleteImageSuccess());
      } catch (err) {
        // dispatch(userDeleteImageFailed(err));
      }
    }
  };

  
export default [
  loadImagesFlow,
  getImageByIdFlow,
  getUserImagesFlow,
  updateImageFlow,
  deleteImageFlow
];
