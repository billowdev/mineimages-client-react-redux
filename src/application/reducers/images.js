import {
  GET_IMAGE_BY_ID_SUCCESS,
  GET_USER_IMAGES_SUCCESS,
  LOAD_IMAGES_SUCCESS,
  SET_IMAGES,
} from "../actions/images";

const initialState = {
  allImages: [],
  modalImages: {},
  userImages: [],
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
    case GET_IMAGE_BY_ID_SUCCESS:
      return {
        ...state,
        modalImages: action.payload,
        error: null,
      };
    case GET_USER_IMAGES_SUCCESS:
      return {
        userImages: action.payload.images,
        error: null,
      };

    default:
      return state;
  }
};

export default reducer;
