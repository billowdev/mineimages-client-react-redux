import { LOAD_PROFILE_SUCCESS } from "../actions/profile";
const initialState = {
  userProfile: {},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
