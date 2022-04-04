import axios from "axios";
const { API_URL, token } = require("../config");

export default {
  checkoutOrders: async () => {
    const response = await axios.get(`${API_URL}/order/checkout`, {
      headers: { "access-token": token },
    });
    return response.data;
  },
};
