import {
  ADMIN_LOAD_IMAGES_SUCCESS,
  ADMIN_LOAD_ORDERS_SUCCESS,
  ADMIN_LOAD_CATEGORIES_BY_ID_SUCCESS
} from "../actions/admin";

const initialState = {
  allImages: [],
  allOrders: [],
  modalImages: {},
  category: {},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOAD_IMAGES_SUCCESS:
      return {
        allImages: action.payload,
        error: null,
      };
    case ADMIN_LOAD_ORDERS_SUCCESS:
      return {
        allOrders: action.payload,
        error: null,
      };
    case ADMIN_LOAD_CATEGORIES_BY_ID_SUCCESS:
      return {
        ...state,
        category: action.payload.data,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
