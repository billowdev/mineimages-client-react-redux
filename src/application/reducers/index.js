import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./auth";
import images from "./images";

export default combineReducers({
  ui,
  auth,
  images,
});
