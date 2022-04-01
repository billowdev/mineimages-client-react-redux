import { PAGE_LOADED, PROFILE_PAGE_LOADED, SET_LOADING_OFF, SET_LOADING_ON} from "../actions/ui";
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
    }
    if(action.type===SET_LOADING_ON){
      toast.loading("loading...")
    }
    if(action.type===SET_LOADING_OFF){
      toast.dismiss();
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
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: `Please  try again`,
        // footer: '<a href="/profile">Profile</a>'
      })
      // toast.error("Login failed");
    }

    if (action.type === authActions.LOAD_SIGNUP_SUCCESS) {
      console.log("Email has send success please check your email");
    }
    if (action.type === authActions.LOAD_SIGNUP_FAILED) {
      console.log("Sign up Failed");
    }
  };

  const updateProfileFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === profileActions.UPLOAD_AVARTAR_SUCCESS) {
    //  console.log("upload avartar success")
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
    if(action.type === profileActions.UPLOAD_AVARTAR_FAILED) {
      console.log("Upload avartar faile")
    }
  };

  
  

export default [pageLoadedFlow, signinLoadedFlow, updateProfileFlow];
