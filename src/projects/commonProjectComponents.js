import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
function ProjectCarousel({ classes, imgArr, interval }) {
  return (
    <Carousel
      emulateTouch
      className={classes.carousel}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={interval}
    >
      {imgArr.map((img, i) => (
        <div className={classes.imgParent} key={i}>
          <img src={img.src} alt={img.alt} className={classes.projectImg} />
        </div>
      ))}
    </Carousel>
  );
}

export { ProjectCarousel, ListExpansionPanel };
