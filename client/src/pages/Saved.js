import React, { useState, useEffect } from "react";
import {
	Grid,
	Typography,
	Paper,
	List,
	ListItem,
	Button,
	Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API.js";

const useStyles = makeStyles((theme) => ({
	paper: {
		minWidth: "90%",
		padding: 25,
	},
	wrapper: {
		marginTop: "3rem",
		justifyContent: "center",
	},
	author: {
		fontWeight: "bold",
	},
}));

function Saved() {
	const [savedBooks, setSavedBooks] = useState([]);

	const classes = useStyles();

	useEffect(() => {
		API.getSavedBooks()
			.then((res) => {
				setSavedBooks(res.data);
			})
			.catch((err) => console.log(err));
	});

	function deleteBook(id) {
		API.deleteBook(id)
			.then((res) => {
				console.log(res);
				loadBooks();
			})
			.catch((err) => console.log(err));
	}

	function loadBooks() {
		API.getSavedBooks()
			.then((res) => {
				setSavedBooks(res.data);
			})
			.catch((err) => console.log(err));
	}

	return (
		<Grid container className={classes.wrapper}>
			<Paper variant="outlined" className={classes.paper}>
				<Typography variant="h3">Saved Books</Typography>
				<List>
					{savedBooks.map((book, i) => (
						<>
							<ListItem key={book._id} alignItems="flex-start">
								<Grid container spacing={1}>
									<Grid item xs={4}>
										<img src={book.image.thumbnail} alt="Book Cover" />
									</Grid>
									<Grid item xs={8}>
										<Typography variant="h3">{book.title}</Typography> <br />
										{book.authors ? (
											<Typography className={classes.author}>
												Written by {book.authors.join(", ")}
											</Typography>
										) : (
											<Typography>No Authors</Typography>
										)}{" "}
										<br />
										<Typography>{book.description}</Typography>
										<br />
										<Button
											variant="contained"
											color="primary"
											onClick={() => deleteBook(book._id)}
										>
											Delete
										</Button>
									</Grid>
								</Grid>
							</ListItem>
							<Divider key={i} />
						</>
					))}
				</List>
			</Paper>
		</Grid>
	);
}

export default Saved;
