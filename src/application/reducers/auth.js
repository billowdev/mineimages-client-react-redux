import { LOAD_AUTH_SUCCESS, SIGNIN_ACTION, SIGNUP_ACTION} from "../actions/auth";

const initialState = {
  isAuth: false,
  id: null,
  permission: null,
  email: null,
  firstName: null,
  password: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === LOAD_AUTH_SUCCESS) {
    return {
      isAuth: true,
      id: action.payload.id,
      firstName: action.payload.firstName,
      permission: action.payload.permission,
      error: null,
    };
  } else if (action.type === SIGNIN_ACTION) {
    return {
      isAuth: action.payload.isAuth,
      id: action.payload.id,
      error: null,
    };
	
  } else if (action.type === SIGNUP_ACTION) {
    return {
      isAuth: action.payload.isAuth,
      id: action.payload.id,
      error: null,
    };
  } else {
    return state;
  }
  
};
export default reducer;
