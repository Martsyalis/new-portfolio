import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function NavMenuIcon({ setDrawerOpen }) {
  const classes = useStyles();
  return (
    <Toolbar>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
}

const useStyles = makeStyles(theme => ({
  menuButton: { position: "fixed" }
}));

export default NavMenuIcon;
