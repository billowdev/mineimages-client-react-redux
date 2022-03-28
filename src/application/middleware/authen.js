import {
  loadAuthenFailed,
  loadAuthenSuccess,
  LOAD_AUTHEN,
  PUT_AUTHEN,
  SET_Authen,
} from "../actions/authen";
import * as uiActions from "../actions/ui";

const loadAuthen =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === LOAD_AUTHEN) {
      try {
        dispatch(uiActions.setLoading(true));
        const authen = await api.authen.isAuthen();
        dispatch(uiActions.setLoading(false));
      } catch (err) {
        dispatch(loadAuthenFailed(err));
      }
    }
  };

  export default loadAuthen

//   const putAuth = () =>({dispatch, getStatee })=>next=>action=>{
// 	  if(action.type === PUT_AUTH){
// 		  const 
// 	  }
//   }