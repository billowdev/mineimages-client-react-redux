import {
	ADMIN_LOAD_USERS_SUCCESS,
  } from "../../actions/admin/users";
  
  const initialState = {
	allUsers: [],
	modalUsers: {},
	error: null,
  };
  
  const reducer = (state = initialState, action) => {
	switch (action.type) {
	  case ADMIN_LOAD_USERS_SUCCESS:
		return {
		  allUsers: action.payload.data,
		  error: null,
		};
	  default:
		return state;
	}
  };
  
  export default reducer;
  