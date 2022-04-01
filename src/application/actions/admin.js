export const ADMIN_LOAD_IMAGES = "[admin.image] load";
export const ADMIN_LOAD_IMAGES_SUCCESS = "[admin.image] load success";
export const ADMIN_LOAD_IMAGES_FAILED = "[admin.image] load failed";
export const ADMIN_INSERT_IMAGE = "[admin.image] insert";
export const ADMIN_UPDATE_IMAGE = "[admin.image] update";
export const ADMIN_DELETE_IMAGE = "[admin.image] delete";

export const adminLoadImages = {
  type: ADMIN_LOAD_IMAGES,
};

export const adminLoadImageSuccess = (image) => ({
  type: ADMIN_LOAD_IMAGES_SUCCESS,
  payload: image,
});

export const adminLoadImageFailed = (error) => ({
  type: ADMIN_LOAD_IMAGES_FAILED,
  payload: error,
});
