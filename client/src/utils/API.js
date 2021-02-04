/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
	getBooks: function (query) {
		return axios.get(URL + query);
	},

	getSavedBooks: function () {
		return axios.get("/api/books");
	},

	deleteBook: function (id) {
		return axios.delete("/api/books/" + id);
	},

	saveBook: function (bookData) {
		return axios.post("/api/books", bookData);
	},
};
