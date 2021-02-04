import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
}));

function Nav() {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Google Books
				</Typography>
				<Button color="inherit" href="/">
					Home
				</Button>
				<Button color="inherit" href="/saved">
					Saved Books
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Nav;
