import {
  ADMIN_LOAD_IMAGES_BY_ID_SUCCESS,
  ADMIN_LOAD_IMAGES_SUCCESS,
} from "../../actions/admin/images";

const initialState = {
  allImages: [],
  modalImages: {},
  imageById: {},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOAD_IMAGES_SUCCESS:
      return {
        allImages: action.payload.data,
        error: null,
      };
    case ADMIN_LOAD_IMAGES_BY_ID_SUCCESS:
      return {
        imageById: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
