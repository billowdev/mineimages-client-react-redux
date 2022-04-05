// ================================================================================//
//                                 Images ACTION                                   //
// ================================================================================//

export const ADMIN_LOAD_IMAGES = "[ADMIN.IMAGES] LOAD";
export const ADMIN_LOAD_IMAGES_SUCCESS = "[ADMIN.IMAGES] LOAD SUCCESS";
export const ADMIN_LOAD_IMAGES_FAILED = "[ADMIN.IMAGES] LOAD FAILED";

export const loadImages = (url) => ({
  type: ADMIN_LOAD_IMAGES,
  payload: url,
});

export const loadImagesSuccess = (image) => ({
  type: ADMIN_LOAD_IMAGES_SUCCESS,
  payload: image,
});

export const loadImagesFailed = (error) => ({
  type: ADMIN_LOAD_IMAGES_FAILED,
  payload: error,
});

export const ADMIN_INSERT_IMAGES = "[ADMIN.IMAGES] INSERT";
export const ADMIN_INSERT_IMAGES_SUCCESS = "[ADMIN.IMAGES] INSERT SUCCESS";
export const ADMIN_INSERT_IMAGES_FAILED = "[ADMIN.IMAGES] INSERT FAILED";

export const InsertImages = (image) => ({
  type: ADMIN_INSERT_IMAGES,
  payload: image,
});

export const InsertImagesSuccess = (image) => ({
  type: ADMIN_INSERT_IMAGES_SUCCESS,
  payload: image,
});

export const InsertImagesFailed = (error) => ({
  type: ADMIN_INSERT_IMAGES_FAILED,
  payload: error,
});

export const ADMIN_UPDATE_IMAGES = "[ADMIN.IMAGES] UPDATE";
export const ADMIN_UPDATE_IMAGES_SUCCESS = "[ADMIN.IMAGES] UPDATE SUCCESS";
export const ADMIN_UPDATE_IMAGES_FAILED = "[ADMIN.IMAGES] UPDATE FAILED";

export const updateImages = (image) => ({
  type: ADMIN_UPDATE_IMAGES,
  payload: image,
});

export const updateImagesSuccess = (image) => ({
  type: ADMIN_UPDATE_IMAGES_SUCCESS,
  payload: image,
});

export const updateImagesFailed = (error) => ({
  type: ADMIN_UPDATE_IMAGES_FAILED,
  payload: error,
});

export const ADMIN_DELETE_IMAGES = "[ADMIN.IMAGES] DELETE ";
export const ADMIN_DELETE_IMAGES_SUCCESS = "[ADMIN.IMAGES.] DELETE SUCCESS";
export const ADMIN_DELETE_IMAGES_FAILED = "[ADMIN.IMAGES] ORDERS FAILED";

export const deleteImages = (id) => ({
  type: ADMIN_DELETE_IMAGES,
  payload: id,
});

export const deleteImagesSuccess = (state) => ({
  type: ADMIN_DELETE_IMAGES_SUCCESS,
  payload: state,
});

export const deleteImagesFailed = (error) => ({
  type: ADMIN_DELETE_IMAGES_FAILED,
  payload: error,
});