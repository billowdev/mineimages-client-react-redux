export const LOAD_AUTHEN = '[auth] load';
export const LOAD_AUTHEN_SUCCESS = '[auth] load success';
export const LOAD_AUTHEN_FAILED = '[auth] load failed';
export const SET_AUTHEN = '[auth] set';
export const PUT_AUTHEN = '[auth] put';

export const loadAuthen = {
	type: LOAD_AUTHEN_SUCCESS,
};

export const loadAuthenSuccess = Auth => ({
    type: LOAD_AUTHEN_SUCCESS,
    payload: Auth,
});

export const loadAuthenFailed = error => ({
    type: LOAD_AUTHEN_FAILED,
    payload: error,
});

export const setAuthen = auth => ({
    type: SET_AUTHEN,
    payload: auth,
});

export const putAuthen = auth => ({
    type: PUT_AUTHEN,
    payload: auth,
});