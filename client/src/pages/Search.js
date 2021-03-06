import React, { useState } from "react";
import {
	Grid,
	Paper,
	Button,
	Typography,
	TextField,
	List,
	ListItem,
	Divider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API.js";

const useStyles = makeStyles((theme) => ({
	center: {
		textAlign: "center",
	},
	paper: {
		minWidth: "90%",
		padding: 25,
	},
	paperFlex: {
		display: "flex",
		minWidth: "90%",
		padding: 25,
		alignItems: "flex-end",
		justifyContent: "space-between",
	},
	wrapper: {
		marginTop: "3rem",
		justifyContent: "center",
	},
	searchBar: {
		width: "25rem",
	},
	button: {
		margin: "12px",
	},
	author: {
		fontWeight: "bold",
	},
}));

function Search() {
	const [books, setBooks] = useState([]);
	const [inputObject, setInputObject] = useState([]);

	const classes = useStyles();

	function handleSubmit(event) {
		event.preventDefault();
		searchBooks(inputObject.value);
	}

	function handleInputChange(event) {
		const { value } = event.target;
		setInputObject({ ...inputObject, value });
	}

	function saveBook(book) {
		API.saveBook(book)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}

	function searchBooks(query) {
		API.getBooks(query)
			.then((res) => {
				console.log(res);
				let bookArray = [];
				res.data.items.forEach((item) => {
					bookArray.push({
						_id: item.id,
						title: item.volumeInfo.title,
						description: item.volumeInfo.description
							? item.volumeInfo.description
							: "No Description Available",
						authors: item.volumeInfo.authors,
						image: item.volumeInfo.imageLinks,
						link: item.volumeInfo.infoLink,
					});
				});
				setBooks(bookArray);
			})
			.catch((err) => console.log(err));
	}

	return (
		<>
			<Grid container spacing={2} className={classes.wrapper}>
				<Paper className={classes.paper}>
					<Grid container spacing={2} className={classes.center}>
						<Grid item xs={12}>
							<Typography variant="h2">(React) Google Book Search</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h5">
								Search for and Save Books of Interest
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid
				container
				direction="row"
				alignItems="flex-end"
				className={classes.wrapper}
			>
				<Paper variant="outlined" className={classes.paperFlex}>
					<Typography variant="h2">Book Search</Typography>
					<div className={classes.searchBar}>
						<TextField
							label="Search"
							variant="standard"
							onChange={handleInputChange}
						/>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							onClick={handleSubmit}
						>
							<SearchIcon />
						</Button>
					</div>
				</Paper>
			</Grid>
			<Grid container className={classes.wrapper}>
				<Paper variant="outlined" className={classes.paper}>
					<Typography variant="h3">Results</Typography>
					<List>
						{books.map((book, i) => (
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
												onClick={() => saveBook({ ...book })}
											>
												Save
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
		</>
	);
}

export default Search;
