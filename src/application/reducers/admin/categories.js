import {
	ADMIN_LOAD_CATEGORIES_BY_ID_SUCCESS
  } from "../../actions/admin/categories";
  
  const initialState = {
	category: {},
	error: null,
  };
  
  const reducer = (state = initialState, action) => {
	switch (action.type) {
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
  