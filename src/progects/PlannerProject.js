import React from "react";
import {
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  Grow,
  useMediaQuery
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
        <Grow in={true}>
          <img
            src={iphoneExpenses}
            alt="Planner app"
            className={classes.projectImg}
          />
        </Grow>

        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 1000 } : {})}
        >
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
              <div className={classes.expansionText}>
                <ul>
                  <Typography component="li">
                    I found the expense tiles to be very easy and
                    straightforward to use, of course, the available categories
                    were designed around me, but I could never make myself keep
                    a record of anything at all until this app.
                  </Typography>
                  <br />
                  <Typography component="li">
                    I think the Cards turned out to be a good design and
                    engineering choice, they were pretty easy to refactor and
                    add features too as they covered more and more components.
                  </Typography>
                </ul>
              </div>
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
        </Grow>
      </Paper>

      {/* <img src={plannerBudget} alt="Planner app" /> */}
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  paper: { display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" },
  projectImg: {
    height: 700,
    width: 330,
    objectFit: "cover"
  },
  header: {
    textAlign: "center",
    margin: 30
  },
  expansionPanelParent: { width: 660 },
  expansionSummery: {},
  expansionText: { margin: 20 }
}));

export default PlannerProject;
