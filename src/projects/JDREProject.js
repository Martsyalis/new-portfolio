import React from "react";
import { Typography, Slide } from "@material-ui/core";
import { ProjectCarousel, ListExpansionPanel } from "./commonProjectComponents";
function JDREProject({ classes, isInView }) {
  return (
    <div className={classes.projectParent}>
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
            JDRE is a first subscription-based real estate company in the
            world(probably). We were tasked with developing a mobile app, an
            administrative website, and two servers. These needed to process
            RMLS Database, display the house info on an interactive map, manage
            various client Subscriptions, Notifications, Legal Documents, Chat,
            and many more features.
          </Typography>
          <ListExpansionPanel
            classes={classes}
            title="What Worked"
            p1="Redux was a great choice for this app. The app had a lot of functionality dependant on a common, large set of data. Global store kept our code DRY and helped us keep the loading times relatively short. While the use of Reducers and Dictionaries helped protect the store from bugs in individual components. This was especially crucial since the project didn't have a comprehensive suite of tests."
            p2="We opted for using a service worker for notifications, which worked great and was very easy to set up. We were also able to re-use the same logic for the administrative website, so the real estate agents were able to get dynamic notifications without us having to build and publish another native app"
          />
          <ListExpansionPanel
            classes={classes}
            title="What Didn't Work"
            p1="Given a very ambitious time-frame and ever-changing product goals we elected not to spend time developing a proper testing suite. This made initial development rapid and agile. But once the project evolved in complexity, adding one feature often meant breaking another. By the end of the development we frequently had to rely on our clients to tell us when something in one of the apps broke. The constraints of App Store meant that it would frequently take few days to release a fix for an experience breaking bug"
            p2="We opted for using Apache Cordova to make a hybrid app. Cordova takes a webpage build with HTML/JS and wraps it in a browser app that displays only that page. Developers can then publish this one-page browser on App Stores. Unfortunately, the documentation was very sparse and we often had to rely on anecdotal, hacky solutions for unpredictable and inconsistent errors. Overall It was very frustrating and discouraging to work with. While we persevered and made it work, React Native would probably be a better and safer choice."
          />
          <ListExpansionPanel
            classes={classes}
            title="Technology Stack"
            p1="Front End: JS, React, Redux, Bulma, Cordova "
            p2="Back End: Node, Express, Mongo, Firebase, FCM "
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
    </div>
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
