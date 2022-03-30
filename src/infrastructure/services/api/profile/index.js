import axios from "axios";
const { API_URL, token } = require("../../../../utils/api");

export default {
  getProfile: async () => {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        "access-token": token,
      },
    });
    return response.data;
  },
};
