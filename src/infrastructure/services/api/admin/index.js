import axios from "axios";
const { API_URL, token } = require("../config");
export default {
  getAllOrders: async () => {
    const response = await axios.get(`${API_URL}/admin/orders`);
    return response.data;
  },
};
