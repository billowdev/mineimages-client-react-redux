import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./auth";
import images from "./images";
import profile from "./profile";
import complete_orders from "./complete_orders";

export default combineReducers({
  ui,
  auth,
  images,
  profile,
  complete_orders
});
