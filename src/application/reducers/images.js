import { LOAD_IMAGES_SUCCESS, SET_IMAGES } from "../actions/images";

const initialState = {
  allImages: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES_SUCCESS:
      return {
        allImages: action.payload,
        error: null,
      };
    case SET_IMAGES:
      return {
        allImages: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
