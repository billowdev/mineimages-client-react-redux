import axios from "axios";
const { API_URL, token } = require("../config");

export default {
  getProfile: async () => {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        "access-token": token,
      },
    });
    return response.data;
  },
  uploadAvartar: async (props) => {
    const response = await fetch(`${API_URL}/user/avartar/upload`, {
      method: "PATCH",
      body: JSON.stringify({ data: props }),
      headers: {
        "Content-Type": "application/json",
        "access-token": token,
      },
    });
    return response.data;
  },
  updateProfile: async (props) => {
    var url = `${API_URL}/user/profile`;
    const response = await axios.patch(url, JSON.stringify(props), {
      headers: {
        "Content-Type": "application/json",
        "access-token": token,
      },
    });
    return response.data;
  },
  getAllImagesUserOwned: async () => {
    var url = `${API_URL}/images/all/owned`;
    const resp = await axios.get(url, {
      headers: {
        "access-token": token,
      },
    });
    return resp.data
  },
  getBenefitCompleteOrders: async () => {
    var url = `${API_URL}/order/complete/benefit`;
    const resp = await axios.get(url, {
      headers: {
        "access-token": token,
      },
    });
    return resp.data
  },
  
};
