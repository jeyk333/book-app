import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
import { Styles } from "./styles";

const Header = ({ classes }) => {
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <Typography className={classes.title}>Book App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(Styles)(Header);
