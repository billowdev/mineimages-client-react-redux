import {
	ADMIN_LOAD_ORDERS_SUCCESS,
  } from "../../actions/admin/orders";
  
  const initialState = {
	allOrders: [],
	error: null,
  };
  
  const reducer = (state = initialState, action) => {
	switch (action.type) {
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
  