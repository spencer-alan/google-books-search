import React from "react";
import { Grid, Paper } from "@material-ui/core";


function NoMatch() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
          This should be the jumbotron
        </Paper> 
      </Grid>
    </Grid>
  )
}

export default NoMatch;