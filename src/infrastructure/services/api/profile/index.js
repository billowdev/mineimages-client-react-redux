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
    // const data = props;
    // console.log("On api profile-updateProfile: ", props.updateUserAddress)
    var url = `${API_URL}/user/profile`;
    const response = await axios.patch(
      url,
      JSON.stringify(props),
      {
        headers: {
          "Content-Type": "application/json",
          "access-token": token,
        },
      }
    );
    return response.data
  },
};
