import {
  BENEFIT_COMPLETE_ORDERS_SUCCESS,
  LOAD_ALL_IMAGES_OWNED_SUCCESS,
  LOAD_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
} from "../actions/profile";
const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  telephone: null,
  avartar: null,
  about: null,
  createdAt: null,
  addressLine1: null,
  addressLine2: null,
  city: null,
  postalCode: null,
  country: null,
  allImagesOwned: [],
  allBenefit: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_SUCCESS:
      return {
        id: action.payload.id,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        telephone: action.payload.telephone,
        avartar: action.payload.avartar,
        about: action.payload.about,
        createdAt: action.payload.createdAt,
        addressLine1: action.payload.addressLine1,
        addressLine2: action.payload.addressLine2,
        city: action.payload.city,
        postalCode: action.payload.postalCode,
        country: action.payload.country,
        error: null,
      };
    case LOAD_ALL_IMAGES_OWNED_SUCCESS:
      return {
        allImagesOwned: action.payload.data,
      };
    case BENEFIT_COMPLETE_ORDERS_SUCCESS:
      return {
        allBenefit: action.payload.data.complete,
      };
    default:
      return state;
  }
};

export default reducer;
