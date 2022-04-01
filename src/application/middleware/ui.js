import {
  PAGE_LOADED,
  PROFILE_PAGE_LOADED,
  SET_LOADING_OFF,
  SET_LOADING_ON,
} from "../actions/ui";
import * as imagesActions from "../actions/images";
import * as profileActions from "../actions/profile";
import * as authActions from "../actions/auth";
import * as orderActions from "../actions/orders";

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
      }).then(function () {
        window.location = "/";
      });
    }
    if (action.type === authActions.LOAD_AUTH_FAILED) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: `Please  try again`,
        // footer: '<a href="/profile">Profile</a>'
      });
      // toast.error("Login failed");
    }
  };

const updateProfileFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === profileActions.UPLOAD_AVARTAR_SUCCESS) {
      dispatch(profileActions.loadProfile);
    } else if (action.type === profileActions.UPDATE_PROFILE_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "อัปเดตข้อมูลโปรไฟล์สำเร็จ",
        text: `ข้อมูลของคุณถูกอัปเดตแล้ว !`,
        // footer: '<a href="/profile">Profile</a>'
      });
      dispatch(profileActions.loadProfile);
    } else if (action.type === profileActions.UPLOAD_AVARTAR_FAILED) {
      console.log("Upload avartar faile");
    } else {
      next(action);
    }
  };

const orderFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === orderActions.USER_ORDER_SUCCESS) {
      console.log("ON UI MIDDLEWARE ORDER SUCCESS");
    } else {
      next(action);
    }
  };

export default [pageLoadedFlow, signinLoadedFlow, updateProfileFlow];
