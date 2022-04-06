import {
	ADMIN_LOAD_IMAGES_SUCCESS,
  } from "../../actions/admin/images";
  
  const initialState = {
	allImages: [],
	modalImages: {},
	error: null,
  };
  
  const reducer = (state = initialState, action) => {
	switch (action.type) {
	  case ADMIN_LOAD_IMAGES_SUCCESS:
		return {
		  allImages: action.payload.data,
		  error: null,
		};
	  default:
		return state;
	}
  };
  
  export default reducer;
  