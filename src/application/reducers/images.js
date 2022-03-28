import { LOAD_IMAGES_SUCCESS, SET_IMAGES } from "../actions/images";

const initialState = {
  allImages: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === LOAD_IMAGES_SUCCESS) {
    return { allImages: action.payload, error: null };
  } else if (action.type === SET_IMAGES) {
    return { allImages: action.payload, error: null };
  } else {
    return state;
  }
};

export default reducer;
