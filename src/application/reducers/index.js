import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./auth";
import images from "./images";
import profile from "./profile";
import complete_orders from "./complete_orders";
import orders from "./orders";
import admin from "./admin";

export default combineReducers({
  ui,
  auth,
  images,
  profile,
  complete_orders,
  orders,
  admin
});
