import React from "react";
import { Grid, Paper } from "@material-ui/core";

function NoMatch() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Paper>Opps! Nothing here.</Paper>
			</Grid>
		</Grid>
	);
}

export default NoMatch;
