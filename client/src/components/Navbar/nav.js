import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";


function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          Google Books
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;