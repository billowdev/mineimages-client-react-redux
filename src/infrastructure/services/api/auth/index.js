const { API_URL, token } = require("../config");
const axios = require("axios");

export default {
  signin: async (props) => {
    const response = await axios.post(`${API_URL}/auth/signin`, props);
    return response.data;
  },
  getAuthState: async () => {
    console.log("token is ", token);
    if (token != null) {
      var url = `${API_URL}/auth/authenticated`;
      const response = await axios.get(url, {
        headers: { "access-token": token },
      });

      return response.data;
    } else {
      return { success: false };
    }
  },
};

export const validate = async (props) => {
  const response = axios.post(`${API_URL}/auth/email-activate`, props);
  return response;
};

// export const SignupApi = async (props) => {
//   const response = axios.post(`${API_URL}/auth/signup`, props);
//   return response;
// };

export const SignupApi = async (props) => {
  const response = axios.post(`${API_URL}/auth/normal/signup`, props);
  return response;
};
