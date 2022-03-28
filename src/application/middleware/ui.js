import { PAGE_LOADED } from "../actions/ui";
import * as authenActions from "../actions/authen";
import * as imagesActions from "../actions/images";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      console.log("page loaded");
      // dispatch(authenActions.loadAuthen);
      dispatch(imagesActions.loadImages);
    }
  };

export default [pageLoadedFlow];
