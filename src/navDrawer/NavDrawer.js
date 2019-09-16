import React from "react";
import {
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import ProfileAvatar from "./profileAvatar";

function NavDrawer({ isDrawerOpen, setDrawerOpen }) {
  //generating classes
  const classes = useStyles();
  return (
    <SwipeableDrawer 
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
      open={isDrawerOpen}
      onClose={()=> setDrawerOpen(false)}
      onOpen ={() => setDrawerOpen(true)}
    >
      <ProfileAvatar />
      <Divider />
      <List>
        <ListItemLink to="/home" title="Home" />
        <ListItemLink to="/projects" title="Projects" />
        <ListItemLink to="/about" title="About" />
      </List>
    </SwipeableDrawer>
  );
}

export default NavDrawer;

//creating classes for material-UI components
const useStyles = makeStyles(theme => ({
  drawer: {
    width: 340,
    flexShrink: 0
  },
  drawerPaper: {
    width: 340
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
