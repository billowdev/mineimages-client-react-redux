export const LOAD_IMAGES = "[IMAGE] load";
export const LOAD_IMAGES_SUCCESS = "[IMAGE] load success";
export const LOAD_IMAGES_FAILED = "[IMAGE] load failed";
export const SET_IMAGES = "[IMAGE] set";
export const PUT_IMAGE = "[IMAGE] put";
export const GET_IMAGE_BY_ID = "[image] get image by id";
export const GET_IMAGE_BY_ID_SUCCESS = "[image] get image by id success";

export const GET_USER_IMAGES = "[IMAGE] get user images";
export const GET_USER_IMAGES_SUCCESS = "[IMAGE] get user images success";
export const GET_USER_IMAGES_FAILED = "[IMAGE] get user images failed";

export const UPDATE_IMAGE_SUCCESS = "[IMAGE] UPDATE IMAGE SUCCESS";
export const UPDATE_IMAGE_FAILED = "[IMAGE] UPDATE IMAGE FAILED";
export const UPDATE_IMAGE = "[IMAGE] UPDATE IMAGE";


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

export const getUserImages = (url) => ({
  type: GET_USER_IMAGES,
  payload: url,
});

export const getUserImagesSuccess = (image) => ({
  type: GET_USER_IMAGES_SUCCESS,
  payload: image,
});
export const getUserImagesFailed = (error) => ({
  type: GET_USER_IMAGES_FAILED,
  payload: error,
});

export const updateImage = (visible) => ({
  type: UPDATE_IMAGE,
  payload: visible
});

export const updateImageSuccess = (visible) =>({
  type: UPDATE_IMAGE_SUCCESS,
  payload: visible
})

export const updateImageFailed = (visible) =>({
  type: UPDATE_IMAGE_FAILED,
  payload: visible
})
