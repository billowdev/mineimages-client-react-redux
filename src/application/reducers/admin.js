import {
  ADMIN_LOAD_IMAGES_SUCCESS,
  ADMIN_LOAD_ORDERS_SUCCESS,
} from "../actions/admin";

const initialState = {
  allImages: [],
  allOrders: [],
  modalImages: {},
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
    default:
      return state;
  }
};

export default reducer;
