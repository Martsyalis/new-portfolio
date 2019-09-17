import React from "react";
import {
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VisibilitySensor from "react-visibility-sensor";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import iphoneExpenses from "../assets/iphone-add.png";

function PlannerProject() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <img
          src={iphoneExpenses}
          alt="Planner app"
          className={classes.projectImg}
        />
        <div className={classes.expansionPanelParent}>
          <Typography variant="h2" component="h2" className={classes.header}>
            Money Planner
          </Typography>
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.expansionSummery}
            >
              <Typography>What Worked</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.expansionSummery}
            >
              <Typography>What Didn't Work</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.expansionSummery}
            >
              <Typography>What Still Needs To Be Done</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      </Paper>
      {/* <img src={plannerBudget} alt="Planner app" /> */}
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  paper: { display: "flex", flexWrap: "wrap" },
  projectImg: {
    height: 700,
    width: "33%",
    objectFit: "cover"
  },
  header: {
    textAlign: "center",
    margin: 30
  },
  expansionPanelParent: { width: "66%" },
  expansionSummery: {}
}));

export default PlannerProject;
