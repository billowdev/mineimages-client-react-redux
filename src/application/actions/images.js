// ============================== LOAD IMAGE ON MAIN PAGE ACTION  ==============================
export const LOAD_IMAGES = "[IMAGE] LOAD";
export const LOAD_IMAGES_SUCCESS = "[IMAGE] LOAD SUCCESS";
export const LOAD_IMAGES_FAILED = "[IMAGE] LOAD FAILED";

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


// ============================== GET IMAGE BY ID PAGE ACTION  ==============================
export const GET_IMAGE_BY_ID = "[IMAGES] GET BY ID";
export const GET_IMAGE_BY_ID_SUCCESS = "[IMAGES] GET BY ID SUCCESS";

export const getImageById = (image) => ({
	type: GET_IMAGE_BY_ID,
	payload: image,
  });
  export const getImageByIdSuccess = (image) => ({
	type: GET_IMAGE_BY_ID_SUCCESS,
	payload: image,
  });

// ============================== GET USER IMAGES ACTION  ==============================
export const GET_USER_IMAGES = "[IMAGE] GET USER IMAGS";
export const GET_USER_IMAGES_SUCCESS = "[IMAGE] GET USER IMAGS SUCCESS";
export const GET_USER_IMAGES_FAILED = "[IMAGE] GET USER IMAGS SUCCESS";

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

// ============================== UPDATE IMAGES ACTION  ==============================
export const UPDATE_IMAGE_SUCCESS = "[IMAGE] UPDATE IMAGE SUCCESS";
export const UPDATE_IMAGE_FAILED = "[IMAGE] UPDATE IMAGE FAILED";
export const UPDATE_IMAGE = "[IMAGE] UPDATE IMAGE";

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


// ============================== UPDATE IMAGES ACTION  ==============================
export const USER_DELETE_IMAGE_SUCCESS = "[IMAGE] USER DELETE  SUCCESS";
export const USER_DELETE_IMAGE_FAILED = "[IMAGE] USER DELETE IMAGE FAILED";
export const USER_DELETE_IMAGE = "[IMAGE] USER DELETE IMAGE";

export const userDeleteImage = (id) => ({
	type: USER_DELETE_IMAGE,
	payload: id
  });
  
  export const userDeleteImageSuccess = (state) =>({
	type: USER_DELETE_IMAGE_SUCCESS,
	payload: state
  })
  
  export const userDeleteImageFailed = (error) =>({
	type: USER_DELETE_IMAGE_FAILED,
	payload: error
  })
