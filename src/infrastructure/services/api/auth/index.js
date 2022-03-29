const { API_URL, token } = require("../../../../utils/api");
const axios = require('axios')

export default {
  signin: async (props) => {
    const response = await axios.post(`${API_URL}/auth/signin`, props);
    return response.data;
    
  },
  isSignin: async () => {
    var url = `${API_URL}/auth/authenticated`;
    const response = await axios.get(url, {
      headers: { "access-token": token },
    });

    return response.data;
  },
  signup: async (props) => {
    const response = axios.post(`${API_URL}/auth/signup`, props);
    // console.log("on api : signup() ", response.data);
    return response.data;
  },
  validate: async (props) =>{
    const response = axios.post(`${API_URL}/auth/email-activate`, props);
    return response.data;
  }
};
