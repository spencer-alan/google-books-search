const db = require("../models");

module.exports = {
	getBook: async (req, res) => {
		try {
			const books = await db.Book.find({});
			res.status(200).json(books);
		} catch (err) {
			res.status(400).json(err);
		}
	},
	addBook: async (req, res) => {
		try {
			console.log(req.body);
			const { _id, title, authors, image, description, link } = req.body;

			const newBook = new db.Book({
				_id,
				title,
				authors,
				image,
				description,
				link,
			});

			const result = await newBook.save();
			console.log(result);
			res.status(200).json(result);
		} catch (err) {
			res.status(400).json(err);
		}
	},
	deleteBook: async (req, res) => {
		try {
			const result = await db.Book.deleteOne({ _id: req.params.id });
			res.status(200).json(result);
		} catch (err) {
			res.status(400).json(err);
		}
	},
};
