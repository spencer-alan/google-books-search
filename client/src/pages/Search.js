import React from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	center: {
		textAlign: "center",
	},
	bigPaper: {
		minWidth: "90%",
		padding: 25,
	},
	wrapper: {
		marginTop: "3rem",
		justifyContent: "center",
	},
}));

function Search() {
	const classes = useStyles();

	return (
		<>
			<Grid container spacing={2} className={classes.wrapper}>
				<Paper className={classes.bigPaper}>
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
			<Grid container className={classes.wrapper}>
				<Paper variant="outlined" className={classes.bigPaper}>
					<Typography>Book Search</Typography>
				</Paper>
			</Grid>
		</>
	);
}

export default Search;
