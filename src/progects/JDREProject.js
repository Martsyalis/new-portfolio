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
            p1="Redux was a great choice for this app. The app had a lot of functionality dependant on a common, large set of data. And different layers of information were available to users depending on their role. Use of Reducers and Dictionaries helped us keep the loading times relatively short, and protect the store from bugs in individual components. This was especially crucial since the project didn't have a comprehensive suite of tests."
            p2="We opted for using a service worker for notifications, which worked great and were very easy to set up. Another advantage of this was that we were able to re-use the same logic for the administrative website, so the real estate agents were able to get dynamic notifications about a new client or new chat message on their phone without us having to build and publish a native app"
          />
          <ListExpansionPanel
            classes={classes}
            title="What Didn't Work"
            p1="Given a very ambitious initial time-frame and ever-changing product goals and features we elected not to spend time developing a proper testing suite. This made initial development rapid and agile. But once the project evolved into a 2 complicated, feature-rich front ends and 2 complicated and computationally demanding back ends, adding one feature as often as not meant breaking another. Things got so bad that by the end of the development we frequently had to rely on our clients to tell us when something in one of the apps broke. The complex and massive Database and constraints of App Store meant that it would frequently take us a better part of a week to release a fix for an experience breaking bug"
            p2="Since no one on our team has built a mobile app before we opted for using Apache Cordova to make a hybrid app. Cordova takes a webpage build with HTML/JS and wraps it in a browser app that displays only that page. Developers can then publish this one-page browser on App Stores. This looked like a great solution at first but soon proved to be excessively buggy and unpredictable. The documentation was almost non-existent. We had to rely on anecdotal, hacky solutions found on lesser-known message boards. When it worked, It was a great, but unpredictable errors at build time meant that we couldn't accurately predict time frames of new releases. Most of all, It was very frustrating and discouraging to work with. While we persevered and made it work, React Native would probably be a better and safer choice."
          />
          <ListExpansionPanel
            classes={classes}
            title="What Could Be Added"
            p1=""
            p2=""
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
