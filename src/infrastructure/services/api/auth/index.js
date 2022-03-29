import axios from 'axios';
const {API_URL} = require('../../../../utils/api')

export default {
    signin: async (props) => {

        const response = await axios.post(`${API_URL}/auth/signin`, props);
        return response.data
    },
    isSignin: async () =>{
        const response = await axios.get(`${API_URL}/auth/isauth`)
        return response.data
    }
}