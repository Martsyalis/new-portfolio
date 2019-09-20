import React from "react";
import { Typography, Slide } from "@material-ui/core";
import { ProjectCarousel, ListExpansionPanel } from "./commonProjectComponents";

function PlannerProject({ classes, isInView }) {
  return (
    <div className={classes.projectParent}>
      <Slide
        direction="right"
        in={isInView}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
      >
        <div>
          <ProjectCarousel interval={5000} classes={classes} imgArr={imgArr} />
        </div>
      </Slide>
      <Slide
        in={isInView}
        direction="left"
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
      >
        <div className={classes.expansionPanelParent}>
          <Typography variant="h2" component="h2" className={classes.header}>
            Money Planner
          </Typography>
          <Typography varian="body1" className={classes.summery}>
            Mockup for the financial planner PWA. As I got more bank accounts
            and contractor positions, my financies became much harder to track.
            To solve this I wanted to create a centralized place for all my
            financial expenses. I set out to create an app that would be
            extreamly easy to use, while still providing financial insights and
            self accountability. I found the app to be very helpful in keeping
            track of my daily and monthly expenses, and seeing overall trends
            and predictions for my spending. Over the first month, it cut my
            expenses by third. It turns out that $4 coffees, and 3 dollar snacks
            add up very quickly.
          </Typography>
          <ListExpansionPanel
            classes={classes}
            title="What Worked"
            p1="If user is going to use this app to track every purchase, it must be really easy and quick to use. I think Add Expense page achives that goal rather well. THe expense tiles make it quick to pick a category for users expense. Once the user picks the tile, the enire screen becomes one numeric input line with a native NuPad. As a result user needs only 3 clicks to enter a new expense"
            p2="PWA adds inteligent cashing, offline capabilities, and an option to download and use the app as native on mobile device. This makes it much more practical for everyday, 'on the go' use. When using Android OS, which allows PWA to behave like native app from the app store, This adds a lot of utility and ease to User Expirience"
          />
          <ListExpansionPanel
            classes={classes}
            title="What Didn't Work"
            p1="Rent takes too much space in Charts. One potential solution would be to move it to its own category. But thematicly and logically rent belong in monthly expenses. And refactoring would mean changing existing user Data. This once again reinforced just how crusial it is to get data schemas and overall structure right, because once the app."
            p2="As mentioned before PWA is a great tool for android mobile apps. However I don't have enough expirience with the technology to make sure the cashing follows best practices and logic. Moreover, downloading the app on the device from the webpage is still not supported on iOS, so the app produces significantly different user expirience depending on OS."
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
          <ListExpansionPanel
            classes={classes}
            title="Technology Stack"
            p1="Front End: JS, React, Bulma, PWA"
            p2="Back End: Serverless with Firebase Auth and Firestore"
          />
        </div>
      </Slide>
    </div>
  );
}

const imgArr = [
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-51296.appspot.com/o/iphone-add.png?alt=media&token=a7dec390-1bec-46fe-9e56-947562e541c3",
    alt: "Add Expense screen of Planner app"
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-51296.appspot.com/o/iphone-budget.png?alt=media&token=df3f4797-5ba9-4308-ab7c-d475d7a42a28",
    alt: "Budget screen of Planner app"
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-51296.appspot.com/o/iphone-charts.png?alt=media&token=bfe9433d-1fa1-4ea5-92ab-adea5e8398ea",
    alt: "Charts screen of Planner App"
  }
];

export default PlannerProject;
