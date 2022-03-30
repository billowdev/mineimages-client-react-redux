import { combineReducers } from "redux";
import ui from "./ui";
import auth from "./auth";
import images from "./images";
import profile from "./profile";

export default combineReducers({
  ui,
  auth,
  images,
  profile
});
