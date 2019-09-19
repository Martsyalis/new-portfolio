import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlannerProject from "./PlannerProject";
import JDREProject from "./JDREProject";
import VisibilitySensor from "react-visibility-sensor";

function HomePage() {
  const classes = useStyles();
  const [isJDREInView, setJDREInView] = useState(false);
  const [isPlannerInView, setPlannerInView] = useState(false);

  return (
    <React.Fragment>
      <VisibilitySensor
        onChange={setJDREInView}
        active={!isJDREInView}
        partialVisibility={true}
      >
        <JDREProject classes={classes} isInView={isJDREInView} />
      </VisibilitySensor>
      <VisibilitySensor
        onChange={setPlannerInView}
        active={!isPlannerInView}
        partialVisibility={true}
        minTopValue={300}
      >
        <PlannerProject classes={classes} isInView={isPlannerInView} />
      </VisibilitySensor>
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    minHeight: "90vh",
    marginTop: "5vh",
    overflowX: "hidden"
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
  expansionPanelParent: { width: 660, marginTop: 20, marginBottom: 20 },
  expansionPanel: { marginTop: 10 },
  expansionSummery: {},
  expansionText: { marginBottom: 20 }
}));

export default HomePage;
