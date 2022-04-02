import { PAGE_LOADED } from "../actions/ui";
import Swal from "sweetalert2";
import * as imagesActions from "../actions/images";
import * as authActions from "../actions/auth";
import * as ordersActions from "../actions/orders"
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
    } else if (action.type === authActions.SIGNIN_FAILED) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: `Please  try again`,
      });
    } else if (action.type === authActions.SIGNIN_SUCCESS) {
      log("SIGNOUT SUCCESS");
    }

    if (action.type === authActions.LOAD_AUTH_INVALID) {
      log("INVALID CREDENTIAL");
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
    if(action.type === ordersActions.USER_ORDER_FAILED){
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถสั่งซื้อได้",
        text: `${action.payload.msg}`,
      });
    }
  };

export default [pageLoadedFlow, loadAuthActionFlow, loadOrderFlow];
