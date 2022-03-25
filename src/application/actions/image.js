export const LOAD_IMAGE = '[image] load';
export const LOAD_IMAGE_SUCCESS = '[image] load success';
export const LOAD_IMAGE_FAILED = '[image] load failed';
export const SET_Image = '[image] set';
export const PUT_Image = '[image] put';

export const loadImage = {
	type: LOAD_IMAGE,
};

export const loadAuthSuccess = image => ({
    type: LOAD_IMAGE_SUCCESS,
    payload: image,
});

export const loadImageFailed = error => ({
    type: LOAD_IMAGE_FAILED,
    payload: error,
});

export const setImage= image => ({
    type: SET_IMAGE,
    payload: image,
});

export const putImage = image => ({
    type: PUT_IMAGE,
    payload: image,
});