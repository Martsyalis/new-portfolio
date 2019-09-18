import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlannerProject from "./PlannerProject";
import JDREProject from "./JDREProject";

function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <JDREProject classes={classes} />
      <PlannerProject classes={classes} />
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    height: "90vh",
    marginTop: "5vh"
  },
  carousel: { width: 330 },
  imgParent: { background: "white" },
  projectImg: {
    height: 600,
    width: 330,
    objectFit: "cover"
  },
  header: {
    textAlign: "center",
    margin: 30
  },
  summery: { textAlign: "justify " },
  expansionPanelParent: { width: 660 },
  expansionPanel: { marginTop: 10 },
  expansionSummery: {},
  expansionText: { marginBottom: 20 }
}));

export default HomePage;
