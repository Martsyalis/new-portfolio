import React from "react";
import {
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import ProfileAvatar from "./profileAvatar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

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
      onClose={() => setDrawerOpen(false)}
      onOpen={() => setDrawerOpen(true)}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <ProfileAvatar />
      <Divider />
      <List>
        {/* <ListItemLink to="/home" title="Home" className={classes.LinkItems} /> */}
        <ListItemLink
          to="/projects"
          title="Projects"
          className={classes.LinkItems}
        />
        <ListItemLink to="/about" title="About" className={classes.LinkItems} />
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
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  LinkItems: {
    textAlign: "center"
  }
}));

function ListItemLink({ title, to, className }) {
  return (
    <ListItem
      component={AdapterLink}
      exact
      to={to}
      button
      className={className}
    >
      <ListItemText primary={title} />
    </ListItem>
  );
}

const AdapterLink = React.forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));
