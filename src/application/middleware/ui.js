import { PAGE_LOADED } from "../actions/ui";
import * as imagesActions from "../actions/images";
import * as profileActions from "../actions/profile";
import * as authActions from "../actions/auth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === PAGE_LOADED) {
      console.log("page loaded");
      dispatch(imagesActions.loadImages);
      dispatch(profileActions.loadProfile);
    }
  };

const signinLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === authActions.LOAD_AUTH_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "Signin success",
        text: `Welcome to mineimages `,
        // footer: '<a href="/profile">Profile</a>'
      });
    }
    if (action.type === authActions.LOAD_AUTH_FAILED) {
      toast.error("Login failed");
    }

    if (action.type === authActions.LOAD_SIGNUP_SUCCESS) {
      console.log("Email has send success please check your email");
    }
    if (action.type === authActions.LOAD_SIGNUP_FAILED) {
      console.log("Sign up Failed");
    }
  };
export default [pageLoadedFlow, signinLoadedFlow];
