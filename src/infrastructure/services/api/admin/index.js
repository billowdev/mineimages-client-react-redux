import axios from "axios";
const { API_URL, token } = require("../config");
export default {
  getAllOrders: async () => {
    const response = await axios.get(`${API_URL}/admin/orders`);
    return response.data;
  },
  createImages: async (props) => {
    const resp = await axios.post(`${API_URL}/images/upload`, props, {
      headers: { "access-token": token },
    });
    return resp.data;
  },
  createCategories: async (props) => {
    const resp = await axios.post(`${API_URL}/admin/categories/insert`, props, {
      headers: { "access-token": token },
    });
    return resp.data;
  },

  getCategoriesById: async (props) => {
    const resp = await axios.get(
      `${API_URL}/admin/categories/get/${props}`,
      {
        headers: { "access-token": token },
      }
    );
    return resp.data;
  },
  updateCategories: async (props) => {
    const resp = await axios.patch(
      `${API_URL}/admin/categories/update/${props}`,
      {
        headers: { "access-token": token },
      }
    );
    return resp.data;
  },

  deleteCategories: async (props) => {
    const resp = await axios.post(
      `${API_URL}/admin/categories/delete/${props}`,
      {
        headers: { "access-token": token },
      }
    );
    return resp.data;
  },
};
