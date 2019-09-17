import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlannerProject from "./PlannerProject";
import "./projects.css";

function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <PlannerProject />
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({}));

export default HomePage;
