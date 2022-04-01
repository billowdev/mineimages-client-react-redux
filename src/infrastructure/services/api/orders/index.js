import axios from "axios";
const { API_URL, token } = require("../../../../utils/api");

export default {
  getOrders: async (props) => {
    const response = await axios.get(`${API_URL}/order${props}`, {
      headers: { "access-token": token },
    });
    return response.data;
  },
  getCompleteOrders: async () => {
    const response = await axios.get(`${API_URL}/order/complete`, {
      headers: { "access-token": token },
    });
    return response.data;
  },
};
