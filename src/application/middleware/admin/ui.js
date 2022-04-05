import { PAGE_LOADED } from "../../actions/admin/ui";
import Swal from "sweetalert2";
import * as categoriesActions from "../../actions/admin/categories";
import toast from "react-hot-toast";
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

export default [
  pageLoadedFlow,
  loadCategoriesFlow,
];
