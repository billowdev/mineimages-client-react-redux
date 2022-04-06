import { PAGE_LOADED } from "../../actions/admin/ui";
import Swal from "sweetalert2";
import * as categoriesActions from "../../actions/admin/categories";
import * as usersActions from "../../actions/admin/users";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      log("page loaded");
    }
  };

const loadCategoriesFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === categoriesActions.ADMIN_DELETE_CATEGORIES_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "เรียบร้อย",
        text: `ลบข้อมูลประเภทรูปภาพเรียบร้อย`,
      });
      window.location.reload();
    }
    if (action.type === categoriesActions.ADMIN_UPDATE_CATEGORIES_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "เรียบร้อย",
        text: `แก้ไขข้อมูลเรียบร้อย`,
      }).then(()=>{
        window.location = "/admin/categories"
      });
    }
    if (action.type === categoriesActions.ADMIN_INSERT_CATEGORIES_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "เรียบร้อย",
        text: `เพิ่มข้อมูลเรียบร้อย`,
      }).then(() => {
        window.location.assign("/admin/categories");
      });
    }
    if (action.type === categoriesActions.ADMIN_INSERT_CATEGORIES_FAILED) {
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถเพิ่มข้อมูลได้ ",
        text: `${action.payload}`,
      });
    }
  };

const usersLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === usersActions.ADMIN_CREATE_USERS_SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "สำเร็จ ",
        text: `เพิ่มข้อมูลเรียบร้อย`,
      }).then(() => {
        window.location = "/admin/users";
      });
    }
    if (action.type === usersActions.ADMIN_CREATE_USERS_FAILED) {
      toast.error("เพิ่มข้อมูลไม่สำเร็จ");
    }
    if (action.type === usersActions.ADMIN_UPDATE_USERS_SUCCESS) {
      toast.success("อัปเดตข้อมูลเรียบร้อย");
    }
    if (action.type === usersActions.ADMIN_UPDATE_USERS_FAILED) {
      toast.error("อัปเดตข้อมูลไม่สำเร็จ");
    }
    if (action.type === usersActions.ADMIN_DELETE_USERS_SUCCESS) {
      toast.success("ลบข้อมูลเรียบร้อย");
    }
    if (action.type === usersActions.ADMIN_DELETE_USERS_FAILED) {
      toast.error("ลบข้อมูลไม่สำเร็จ");
    }
  };

export default [pageLoadedFlow, loadCategoriesFlow, usersLoadedFlow];
