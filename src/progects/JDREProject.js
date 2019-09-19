import React from "react";
import { Paper, Typography, Slide } from "@material-ui/core";
import { ProjectCarousel, ListExpansionPanel } from "./commonProjectComponents";
function JDREProject({ classes, isInView }) {
  return (
    <Paper className={classes.paper}>
      <Slide
        direction="right"
        in={isInView}
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
            Administrative website and Servers. These needed to process RMLS
            Database, display the house info on an interactive map, manage
            various client Subscriptions, Notifications, Legal Documents, Chat
            and many more features.
          </Typography>
          <ListExpansionPanel
            classes={classes}
            title="What Worked"
            p1="Redux was a great choice for this app. The app had alot of functionality dependant on a common large set of data and multiple layers of information availible to users based on their role. Use of Reducers and Dictioneries helped us keep the loading times relatively short, and protect the store from bugs in individual components. This was especially crusial since the project didn't have any tests to speak of, but more on that in 'What did not work' section"
            p2="We opted for using service worker for notifications, Which worked great and were very easy to set up. Another advantage of this was that we were able to re-use the same logic for administrative website, so The Real Estate Agents were able to get dynamic notifications about new client or new chat message on their phone without having to build and publish a native app"
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
      </Slide>
      <Slide
        direction="left"
        in={isInView}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
      >
        <div>
          <ProjectCarousel interval={3000} classes={classes} imgArr={imgArr} />
        </div>
      </Slide>
    </Paper>
  );
}

export default JDREProject;

const imgArr = [
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-51296.appspot.com/o/iphone-splash.png?alt=media&token=ecd95732-07ca-4706-94dd-34dc8edf84a3",
    alt: "Splash screen of JDRE App"
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-51296.appspot.com/o/iphone-map.png?alt=media&token=4abd70ec-956f-4f54-a943-aa720a1986ec",
    alt: "Map screen of JDRE App"
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-51296.appspot.com/o/phone-account.png?alt=media&token=9d063883-4e7c-481a-9471-ce00fa0fbb76",
    alt: "Account screen of JDRE App"
  }
];
