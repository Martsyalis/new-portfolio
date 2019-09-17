import React from "react";
import {
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  Grow,
  ExpansionPanelDetails
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
            <ListExpansionPanel
              classes={classes}
              title="What Worked"
              p1="I found the expense tiles to be very easy and
                    straightforward to use, of course, the available categories
                    were designed around me, but I could never make myself keep
                    a record of anything at all until this app."
              p2="I think the Cards turned out to be a good design and
                    engineering choice, they were pretty easy to refactor and
                    add features too as they covered more and more components."
            />
            <ListExpansionPanel
              classes={classes}
              title="What Didn't Work"
              p1="In Monthly or Total expenses Charts, Rent takes up too much
              space. I am not sure how to handle it at this time, but
              potential solutions would be to move Rent to its own category.
              On the other hand, Thematicly and logically Rent belong in
              Monthly Expenses, and perhaps the squished graph just tells me
              I should spend less on Rent..."
              p2="PWA aspect of the app certainly makes it much easier to use on
              a daily bases and this app simply wouldn't be usable without
              it, but My cashing technique is inefficient and probably
              buggy. The only diagnostic tool that I have for PWA, which is
              google's Lighthouse, shows near 100% ratings. But personally,
              Everytime the app is updated and the new version has to be
              loaded, the cashing takes a good 6-7 seconds which feels
              excruciatingly slow. Half the time I close down the app
              entirely and re-open it out of impatience. The solution might
              be to simply let user know whats happening by displaying
              'Updating' Messege. But Im a little worried about messing with
              Service Worker any more then I already have."
            />
            <ListExpansionPanel
              classes={classes}
              title="What needs to be added"
              p1="In future versions, the tiles need to be customizable to an
              individual user. the difficulty with that right now is that
              I can't think of the categories that others might need, And
              I can't offer user to name their own because icons are so
              crucial to the 'effortlessness' of adding a new expense"
              p2="More Data is needed for this, but where the Charts could
              really shine is in a multi-month analysis. Until then I have
              no long term trends to analyze. Still, it would be nice to
              come up with more data to show in Charts, if only to
              practice Data Visualisation which was one of the original
              goals of this project"
            />
          </div>
        </Grow>
      </Paper>
    </React.Fragment>
  );
}

function ListExpansionPanel({ classes, title, p1, p2 }) {
  return (
    <ExpansionPanel className={classes.expansionPanel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.expansionSummery}
      >
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ul className={classes.expansionText}>
          <Typography component="li">{p1}</Typography>
          <br />
          <Typography component="li">{p2}</Typography>
        </ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>
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
  expansionText: { marginBottom: 20 }
}));

export default PlannerProject;
