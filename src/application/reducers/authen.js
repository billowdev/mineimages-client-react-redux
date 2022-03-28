import { LOAD_AUTHEN_SUCCESS, SET_AUTHEN } from "../actions/authen";

const initialState = {
  isAuth: false,
  id: null,
  permission: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === LOAD_AUTHEN_SUCCESS) {
    return {
      isAuth: true,
      id: action.payload.id,
      permission: action.payload.permission,
      error: null,
    };
  } else if (action.type === SET_AUTHEN) {
    return {
      isAuth: true,
      id: action.payload.id,
      permission: action.payload.permission,
      error: null,
    };
  } else {
    return state;
  }
};
export default reducer;