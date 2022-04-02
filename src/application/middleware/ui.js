import { PAGE_LOADED } from "../actions/ui";
import Swal from "sweetalert2";
// import * as imagesActions from '../actions/images';
import * as authActions from "../actions/auth";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      log("page loaded");
      // dispatch(imagesActions.loadImages);
    }
  };

const loadAuthActionFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === authActions.SIGNIN_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "Signin success",
        text: `Welcome to mineimages `,
      }).then(function () {
        window.location = "/";
      });
    } else if (action.type === authActions.SIGNIN_FAILED) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: `Please  try again`,
      });
    } else if (action.type === authActions.SIGNIN_SUCCESS) {
      log("SIGNOUT SUCCESS")
    }

    if(action.type === authActions.LOAD_AUTH_INVALID)  {
      log("INVALID CREDENTIAL")
    }

  };

export default [pageLoadedFlow, loadAuthActionFlow];
