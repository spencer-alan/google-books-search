import React from "react";
import { Grid, Paper, Button, Typography, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

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
		backgroundColor: "#0080ff",
	},
}));

function Search() {
	const classes = useStyles();

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
					<div classname={classes.searchBar}>
						<TextField label="Search" variant="standard" />
						<Button className={classes.button}>
							<SearchIcon />
						</Button>
					</div>
				</Paper>
			</Grid>
		</>
	);
}

export default Search;
