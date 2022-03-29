import Cookies from "js-cookie";
export const API_URL = process.env.REACT_APP_API_URL;

export const token = Cookies.get("access-token");
export const AccessHeader = { "access-token": token }

export const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME