import axios from "axios";
const { API_URL, token } = require("../../../../utils/api");

export default {
  signin: async (props) => {
    const response = await axios.post(`${API_URL}/auth/signin`, props);
    return response.data;
  },
  isSignin: async () => {
    var url = `${API_URL}/auth/authenticated`;
    const response = await axios.get(`${API_URL}/auth/authenticated`, {
      headers: { "access-token": token },
    });

    return response.data;
  },
  signup: async (props)=>{
    const response = axios.post(`${API_URL}/auth/signup`, props)
    console.log("on api : signup() ", response.data)
    return response.data
  }
};
