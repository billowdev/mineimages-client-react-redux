export const LOAD_IMAGES = "[image] load";
export const LOAD_IMAGES_SUCCESS = "[image] load success";
export const LOAD_IMAGES_FAILED = "[image] load failed";
export const SET_IMAGES = "[image] set";
export const PUT_IMAGE = "[image] put";
export const GET_IMAGE_BY_ID = "[image] get image by id";
export const GET_IMAGE_BY_ID_SUCCESS = "[image] get image by id success";

export const loadImages = {
  type: LOAD_IMAGES,
};

export const loadImageSuccess = (image) => ({
  type: LOAD_IMAGES_SUCCESS,
  payload: image,
});

export const loadImageFailed = (error) => ({
  type: LOAD_IMAGES_FAILED,
  payload: error,
});

export const setImages = (images) => ({
  type: SET_IMAGES,
  payload: images,
});

export const putImage = (image) => ({
  type: PUT_IMAGE,
  payload: image,
});

export const getImageById = (image) => ({
  type: GET_IMAGE_BY_ID,
  payload: image,
});
export const getImageByIdSuccess = (image) => ({
  type: GET_IMAGE_BY_ID_SUCCESS,
  payload: image,
});
