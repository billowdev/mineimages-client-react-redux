export const LOAD_AUTH = '[auth] load';
export const LOAD_AUTH_SUCCESS = '[auth] load success';
export const LOAD_AUTH_FAILED = '[auth] load failed';
export const SET_AUTH = '[auth] set';
export const PUT_AUTH = '[auth] put';

export const loadauth = {
	type: LOAD_AUTH,
};

export const loadAuthSuccess = Auth => ({
    type: LOAD_AUTH_SUCCESS,
    payload: Auth,
});

export const loadAuthFailed = error => ({
    type: LOAD_AUTH_FAILED,
    payload: error,
});

export const setAuth = auth => ({
    type: SET_Auth,
    payload: auth,
});

export const putAuth = auth => ({
    type: PUT_AUTH,
    payload: auth,
});