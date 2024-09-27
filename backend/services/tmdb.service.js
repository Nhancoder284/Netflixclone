import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
	const options = {
		headers: {
			accept: "application/json",
			Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWQ5Y2E1YmUzMjgzNmU2NjJkNTBmN2E1MjM3OTAxYyIsIm5iZiI6MTcyNzQzNDEwMC45OTg0MDEsInN1YiI6IjY2ZjU5MGE2N2JjNmEyYjA2ZmJlZDQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7p22Ui_0sazPP0S8WlmaXiMjRbTGeH3cFzAqg8trBwk"
		},
	};

	try {
		const response = await axios.get(url, options);

		if (response.status !== 200) {
			throw new Error("Failed to fetch data from TMDB: " + response.statusText);
		}

		return response.data;
	} catch (error) {
		console.error("Error fetching data from TMDB:", error);
		throw error;
	}
};
