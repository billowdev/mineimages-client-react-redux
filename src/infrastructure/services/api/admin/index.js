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
    const resp = await axios.post(`${API_URL}/admin/categories/create`, props, {
      headers: { "access-token": token },
    });
    return resp.data;
  },
  updateCatefories: async (props) => {
    Object.keys(props).forEach((key) => {
      if (props[key] === undefined) {
        delete props[key];
      }
    });
    const resp = await axios.patch(
      `${API_URL}/admin/categories/update`,
      props,
      {
        "Content-Type": "application/json",
        headers: { "access-token": token },
      }
    );
    return resp.data;
  },
  getCategoriesById: async (props) => {
    const resp = await axios.get(`${API_URL}/admin/categories/get/${props}`, {
      "Content-Type": "application/json",
      headers: { "access-token": token },
    });
    return resp.data;
  },
  deleteCategories: async (props) => {
    const resp = await axios.patch(
      `${API_URL}/admin/categories/delete`,
      props,
      {
        headers: { "access-token": token },
      }
    );
    return resp.data;
  },
  getAllUsers: async (props) => {
    const response = await axios.get(`${API_URL}/admin/users/get${props}`, {
      headers: { "access-token": token },
    });
    return response.data;
  },
  updateUsersData: async (props) => {
    const {
      id,
      firstName,
      lastName,
      email,
      about,
      telephone,
      permission,
      status,
      avartar,
    } = props;
    const { addressLine1, addressLine2, postalCode, city, country } = props;
    let user = {
      id,
      firstName,
      lastName,
      email,
      about,
      telephone,
      permission,
      status,
      avartar,
    };
    let address = { addressLine1, addressLine2, postalCode, city, country };
    Object.keys(user).forEach((key) => {
      if (user[key] === undefined || user[key] === null || user[key] === "") {
        delete user[key];
      }
    });
    Object.keys(address).forEach((key) => {
      if (
        address[key] === undefined ||
        address[key] === null ||
        address[key] === ""
      ) {
        delete address[key];
      }
    });
    var url = `${API_URL}/admin/users/update`;
    const response = await axios.patch(
      url,
      { user, address },
      {
        headers: {
          "Content-Type": "application/json",
          "access-token": token,
        },
      }
    );
    return response.data;
  },
  deleteUserData: async (props) => {
    const resp = await axios.patch(
      `${API_URL}/admin/users/delete`,
      {id:props},
      {
        headers: { "access-token": token },
      }
    );
    return resp.data;
  },
  createUsers:  async (props) => {
    const resp = await axios.post(
      `${API_URL}/admin/users/create`,
      props,
      {
        headers: { "access-token": token },
      }
    );
    return resp.data;
  },
};
