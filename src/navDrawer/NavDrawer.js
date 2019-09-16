import React from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import ProfileAvatar from "./profileAvatar";

function NavDrawer() {
  //generating classes
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      variant="permanent"
      anchor="left"
    >
      <ProfileAvatar />
      <Divider />
      <List>
        <ListItemLink to="/home" title="Home" />
        <ListItemLink to="/projects" title="Projects" />
        <ListItemLink to="/about" title="About" />
      </List>
    </Drawer>
  );
}

export default NavDrawer;

//creating classes for material-UI components
const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  }
}));

function ListItemLink({ title, to }) {
  return (
    <NavLink exact to={to} style={{ textDecoration: "none", color: "black" }}>
      <ListItem button>
        <ListItemText primary={title} />
      </ListItem>
    </NavLink>
  );
}
