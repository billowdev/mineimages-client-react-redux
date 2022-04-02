import axios from "axios";
const { API_URL, token } = require("../config");

export default {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/images/all`);
    return response.data;
  },
  getImageById: async (props)=> {
    // console.log("ON API image.getImageById", props);
    const response = await axios.post(`${API_URL}/images/detail`, {
      imgid: props,
    });
    return response.data;
  },
  getUserImages: async (props) => {
    const response = await axios.get(`${API_URL}/user/images${props}`, {
      headers: { "access-token": token },
    });
    return response.data;
  },
  updateImage: async (props) => {
    const response = await axios.patch(
      `${API_URL}/images`,
      JSON.stringify(props),
      {
        headers: {
          "Content-Type": "application/json",
          "access-token": token,
        },
      },
    );
    return response.data;
  },
};
