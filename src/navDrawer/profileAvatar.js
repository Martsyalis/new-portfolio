import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar } from "@material-ui/core";

function ProfileAvatar() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Avatar
        className={classes.media}
        src="https://images.unsplash.com/photo-1563286350-4c9b653ec3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        alt="Vietnam Highway"
      />
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.typography}
      >
        Maryus Martsyalis
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.typography}
      >
        Full Stack React Developer
      </Typography>
    </div>
  );
}
const useStyles = makeStyles({
  card: {
    maxWidth: 340
  },
  media: {
    height: 250,
    width: 250,
    margin: 45
  },
  typography: {
    textAlign: "center"
  }
});

export default ProfileAvatar;
