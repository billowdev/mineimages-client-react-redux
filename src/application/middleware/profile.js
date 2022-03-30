import {
	loadProfileSuccess,
	loadProfileFailed,
	LOAD_PROFILE,
  } from "../actions/profile";
  
  import * as uiActions from "../actions/ui";
  
  const loadProfileFlow =
	({ api }) =>
	({ dispatch }) =>
	(next) =>
	async (action) => {
	  next(action);
	  if (action.type === LOAD_PROFILE) {
		try {
		  dispatch(uiActions.setLoading(true));
		  const profile = await api.profile.getProfile();
		  console.log("on middle ware ", profile)
		  dispatch(loadProfileSuccess(profile));
		  dispatch(uiActions.setLoading(false));
		} catch (err) {
		  dispatch(loadProfileFailed(err));
		}
	  }
	};
 
  
  export default [loadProfileFlow];