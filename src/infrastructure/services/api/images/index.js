import axios from "axios";
const { API_URL, token } = require("../../../../utils/api");
export default {
	getAll: async () =>{
		const response = await axios.get(`${API_URL}/images/all`);

		return response.data
	}
}