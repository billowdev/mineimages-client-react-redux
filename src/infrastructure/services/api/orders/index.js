import axios from "axios";
const { API_URL, token } = require("../config");

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
  userOrder: async (props) => {
    const response = await axios.post(`${API_URL}/order`, {id:props}, {
      headers: { "access-token": token },
    });
    return response.data;
  },
  deleteOrder: async (props) => {

    const response = await axios.get(`${API_URL}/order/delete/${props}`, {
      headers: { "access-token": token },
    });
    return response.data;
  },
};
