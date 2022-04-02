import axios from "axios";
const { API_URL, token } = require("../config");
export default {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  },
};
