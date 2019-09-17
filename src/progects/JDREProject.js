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

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function JDREProject() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: 1000 }}
        >
          <div className={classes.expansionPanelParent}>
            <Typography variant="h2" component="h2" className={classes.header}>
              Jimmy Dorsey Real Estate
            </Typography>
            <Typography varian="body1" className={classes.summery}>
              JDRE is a first subscription based real estate company in the
              world(maybe). We were tasked with developing a Mobile app,
              Administrative website and Server which would take care of RMLS
              Database and displaying the info on an interactive map,
              Subscriptions, Notifications, Signing of Legal Documents, Chat and
              Many more features. There were many interesting arhitectural
              choices Read more about them below!
            </Typography>
            <ListExpansionPanel
              classes={classes}
              title="What Worked"
              p1="Redux was a great choice for this app. The app had alot of functionality dependant on a common large set of data and multiple layers of information availible to users based on their role. Use of Reducers and Dictioneries helped us keep the loading times relatively short, and protect the store from bugs in individual components. This was especially crusial since the project didn't have any tests to speak of, but more on that in 'What did not work' section"
              p2="We opted for using service worker for notifications, Which worked great and were very easy to set up. Another advantage of this was that we were able to reuse the same logic for administrative website, so The Real Estate Agents were able to get dynamic notifications about new client or new chat message on their phone without having to build and publish a native app"
            />
            <ListExpansionPanel
              classes={classes}
              title="What Didn't Work"
              p1="Given a very ambitious initial time-frame and ever changing product goals and features we elected not to spend time developing a proper testing suite. This made initial development rapid and agile. But once the project evolved into a 2 complicated, feature rich front-ends and 2 complicated and computationaly demaning back-ends, adding one ferature as often as not meant breaking another. Things got so bad that by the end of the development we frequently had to rely on our clients to tell us when something in one of the apps broke. The complex and massive Database and constreins of App store meant that it would frequently take us a better part of a week to release a fix for product breaking bug"
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
        <Grow in={true}>
          <div>
            <Carousel
              className={classes.carousel}
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
            >
              <div className={classes.imgParent}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-51296.appspot.com/o/iphone-splash.png?alt=media&token=ecd95732-07ca-4706-94dd-34dc8edf84a3"
                  alt="Splash screen of JDRE App"
                  className={classes.projectImg}
                />
              </div>
              <div className={classes.imgParent}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-51296.appspot.com/o/iphone-map.png?alt=media&token=4abd70ec-956f-4f54-a943-aa720a1986ec"
                  alt="Map screen of JDRE App"
                  className={classes.projectImg}
                />
              </div>
              <div className={classes.imgParent}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-51296.appspot.com/o/phone-account.png?alt=media&token=9d063883-4e7c-481a-9471-ce00fa0fbb76"
                  alt="Account screen of JDRE App"
                  className={classes.projectImg}
                />
              </div>
            </Carousel>
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
  expansionPanelParent: { width: 660 },
  expansionPanel: { marginTop: 10 },
  expansionSummery: {},
  expansionText: { marginBottom: 20 }
}));

export default JDREProject;
