import {
	loadAuthSuccess,
	loadAuthFailed,
	LOAD_AUTH,
	SIGNUP_ACTION,
	ISAUTH_ACTION,
	SIGNIN_ACTION,
  } from "../actions/auth";
  import * as uiActions from "../actions/ui";
  
  const isAuthFlow = ({api}) => ({dispatch}) => (next) => async (action) => {
	next(action);
	  if (action.type === ISAUTH_ACTION){
		  try {
			  dispatch(uiActions.setLoading(true));
			  const auth = await api.auth.isSignin();
			  dispatch(loadAuthSuccess(auth));
			  dispatch(uiActions.setLoading(false));
		  } catch(err){
			  dispatch(loadAuthFailed(err));
		  }
	  }
  }
  
  const loadAuthFlow = ({api}) => ({dispatch}) => (next) => async (action) => {
	next(action);
	  if (action.type === LOAD_AUTH){
		  try {
			  dispatch(uiActions.setLoading(true));
			  const auth = await api.auth.isSignin();
			  dispatch(loadAuthSuccess(auth));
			  dispatch(uiActions.setLoading(false));
		  } catch(err){
			  dispatch(loadAuthFailed(err));
		  }
	  }
  }
  
  const signinFlow = ({api}) => ({dispatch}) => (next) => async (action) => {
	next(action);
	  if (action.type === SIGNIN_ACTION){
		  try {
			  dispatch(uiActions.setLoading(true));
			  console.log("on middleware signin flow payload: ", action.payload)
			  const auth = await api.auth.signin(action.payload);
			  dispatch(loadAuthSuccess(auth));
			  console.log("on middleware signin flow: response from api", auth)
			  dispatch(uiActions.setLoading(false));
		  } catch(err){
			  dispatch(loadAuthFailed(err));
			  
		  }
	  }
  }
  
  
  export default [loadAuthFlow, isAuthFlow, signinFlow]
  
  