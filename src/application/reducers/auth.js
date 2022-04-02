import { LOAD_AUTH_VALID, SIGNOUT_SUCCESS } from "../actions/auth";

const initialState = {
  authState: [],
  isAuth: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AUTH_VALID:
      return { authState: action.payload, isAuth:true, error: null };
    case SIGNOUT_SUCCESS:
      return { error: null };
    default:
      return state;
  }
};

export default reducer;
