import { PAGE_LOADED } from "../actions/ui";
import Swal from "sweetalert2";
import * as imagesActions from "../actions/images";
import * as authActions from "../actions/auth";
import * as ordersActions from "../actions/orders";
import * as profileActions from "../actions/profile";
import * as cartActions from "../actions/cart";
import * as checkoutActions from "../actions/checkout";


import toast from "react-hot-toast";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      log("page loaded");
      dispatch(imagesActions.loadImages);
      dispatch(cartActions.loadOnCartOrders);
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
        title: "สำเร็จ",
        text: `ลงชื่อเข้าใช้เสร็จสมบูรณ์`,
      }).then(function () {
        window.location = "/";
      });
    }
    if (action.type === authActions.SIGNIN_FAILED) {
      Swal.fire({
        icon: "error",
        title: "ผิดพลาด",
        text: `Please  try again`,
      });
    }
    if (action.type === authActions.SIGNOUT_SUCCESS) {
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
      toast.success(`อัปเดตข้อมูลโปรไฟล์สำเร็จ`);
      dispatch(profileActions.loadProfile);
    }
    if (action.type === profileActions.UPLOAD_AVARTAR_FAILED) {
      toast.success(`ไม่สามารถอัปโหลดรูปโปรไฟล์ได้`);
    }
  };

const loadOrderFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === ordersActions.USER_ORDER_SUCCESS) {
      toast.success(`เช็คข้อมูลที่ตะกร้าสิค้า`);
    }
    if (action.type === ordersActions.USER_ORDER_FAILED) {
      toast.error(`ไม่สามารถสั่งซื้อได้ ${action.payload.msg}!`);
    }
  };

const loadImagesFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === imagesActions.UPLOAD_IMAGE_SUCCESS) {
      toast.success("Upload Successfully!");
      log(`ON USER UPLOAD IMAGE PAYLOAD: ${action.payload}`);
    }
    if (action.type === imagesActions.UPLOAD_IMAGE_FAILED) {
      toast.error(`ไม่สามารถอัปโหลดรูปภาพได้! ${action.payload.msg}`);
      log(`ON USER UPLOAD IMAGE PAYLOAD: ${action.payload}`);
    }
    if (action.type === imagesActions.UPDATE_IMAGE_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "สำเร็จ",
        text: `แก้ไขข้อมูลสำเร็จ`,
      }).then(function () {
        window.location.reload();
      });

      log(`ON USER UPDATE IMAGE PAYLOAD: ${action.payload}`);
    }
    if (action.type === imagesActions.USER_DELETE_IMAGE_SUCCESS) {
      toast.success("ลบรูปภาพเรียบร้อย!");
      log(`ON USER DELETE IMAGE PAYLOAD: ${action.payload}`);
    }
    if (action.type === imagesActions.USER_DELETE_IMAGE_SUCCESS) {
      window.location.reload();
    }
  };

  const loadCheckoutFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === checkoutActions.LOAD_CHECKOUT_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "เรียบร้อย",
        text: `เช็คเอาท์เรียบร้อย ${action.payload.msg}`,
      });
      window.location.reload();
    }
  };

export default [
  pageLoadedFlow,
  loadAuthActionFlow,
  loadOrderFlow,
  updateProfileFlow,
  loadImagesFlow,
  loadCheckoutFlow
];
