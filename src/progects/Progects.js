import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlannerProject from "./PlannerProject";

function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <PlannerProject />
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  projectImg: {
    width: 300
  },

  expansionSummery: {
    width: 700
  }
}));

export default HomePage;
