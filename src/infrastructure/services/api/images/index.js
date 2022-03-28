import axios from "axios";

export default {
	getAll: async () =>{
		const response = await axios.get('http://localhost:3001/images/all');

		return response.data
	}
}