const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: [],
		defualt: [""],
	},
	image: {
		type: String,
	},
	description: {
		type: String,
		defualt: "No description available",
	},
	thumbnail: {
		type: String,
		default: "",
	},
	link: {
		type: String,
		default: "",
	},
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
