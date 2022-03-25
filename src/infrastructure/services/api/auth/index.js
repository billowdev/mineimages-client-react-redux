import axios from 'axios';

export default {
    signin: async () => {
        const response = await axios.get('');

        return response.data
    }
}