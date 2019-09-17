import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlannerProject from "./PlannerProject";
import JDREProject from "./JDREProject";

function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <JDREProject />
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
