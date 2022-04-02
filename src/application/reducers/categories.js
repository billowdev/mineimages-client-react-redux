import {
	LOAD_CATEGORIES_SUCCESS,
  } from "../actions/categories";
  
  const initialState = {
	allCategories: [],
	error: null,
  };
  
  const reducer = (state = initialState, action) => {
	switch (action.type) {
	  case LOAD_CATEGORIES_SUCCESS:
		return {
		  allCategories: action.payload,
		  error: null,
		};
	 
	  default:
		return state;
	}
  };
  
  export default reducer;
  