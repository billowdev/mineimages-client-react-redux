import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./auth";
import images from "./images";
import orders from "./orders";
import profile from "./profile";
import categories from "./categories";
import cart from "./cart";
import checkout from "./checkout";
import adminImages from "./admin/images";
import adminCategories from "./admin/categories";
import adminOrders from "./admin/orders";
import adminUsers from "./admin/users";
import adminTransactions from "./admin/transactions";

export default combineReducers({
  ui,
  auth,
  images,
  orders,
  profile,
  categories,
  cart,
  checkout,
  adminImages,
  adminCategories,
  adminOrders,
  adminUsers,
  adminTransactions
});
