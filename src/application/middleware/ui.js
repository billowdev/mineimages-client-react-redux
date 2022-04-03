import { PAGE_LOADED } from "../actions/ui";
import Swal from "sweetalert2";
import * as imagesActions from "../actions/images";
import * as authActions from "../actions/auth";
import * as ordersActions from "../actions/orders";
import * as profileActions from "../actions/profile";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      log("page loaded");
      dispatch(imagesActions.loadImages);
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
    }
    if (action.type === authActions.SIGNIN_FAILED) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: `Please  try again`,
      });
    }
    if (action.type === authActions.SIGNIN_SUCCESS) {
      log("SIGNOUT SUCCESS");
    }

    if (action.type === authActions.LOAD_AUTH_INVALID) {
      log("INVALID CREDENTIAL");
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
    }
    if (action.type === profileActions.UPDATE_PROFILE_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "อัปเดตข้อมูลโปรไฟล์สำเร็จ",
        text: `ข้อมูลของคุณถูกอัปเดตแล้ว !`,
        // footer: '<a href="/profile">Profile</a>'
      });
      dispatch(profileActions.loadProfile);
    }
    if (action.type === profileActions.UPLOAD_AVARTAR_FAILED) {
      console.log("Upload avartar faile");
    }
    if (action.type === imagesActions.USER_DELETE_IMAGE_SUCCESS) {
      window.location.reload();
    }
  };

const loadOrderFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === ordersActions.USER_ORDER_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "order success",
        text: `${action.payload.msg} please check your cart`,
      });
    }
    if (action.type === ordersActions.USER_ORDER_FAILED) {
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถสั่งซื้อได้",
        text: `${action.payload.msg}`,
      });
    }
  };

export default [
  pageLoadedFlow,
  loadAuthActionFlow,
  loadOrderFlow,
  updateProfileFlow,
];
