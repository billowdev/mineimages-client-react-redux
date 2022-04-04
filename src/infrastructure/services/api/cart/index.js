import axios from "axios";
const { API_URL, token } = require("../config");

export default {
  getOnCartOrders: async () => {
    const response = await axios.get(`${API_URL}/order/cart`, {
      headers: { "access-token": token },
    });
    return response.data;
  },
};
