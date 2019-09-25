import React from "react";
import "./favoriteThings.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function FavoriteThings() {
  return (
    <div className="home-page">
      <div className="wall left-wall">
        <div className="left-window">
          <QuoteCard
            text="If only there were evil people somewhere insidiously committing evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being."
            attribution="Aleksandr Solzhenitsyn"
          />
        </div>
        <div className="left-window">
          <QuoteCard
            text="If only there were evil people somewhere insidiously committing evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being."
            attribution="Aleksandr Solzhenitsyn"
          />
        </div>
        <div className="left-window">
          <QuoteCard
            text="If only there were evil people somewhere insidiously committing evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being."
            attribution="Aleksandr Solzhenitsyn"
          />
        </div>
      </div>
      <div className="wall right-wall">
        <div className="right-window">
          <QuoteCard
            text="To look at the symbolic dimensions of social action- art, religion, ideology, science, law, morality, common sense is not to turn away from the existential dilemmas of life for some empyrean realm of de-emotionalized forms; it is to plunge into the midst of them. The essential vocation of interpretive anthropology is not to answer our deepest questions, but to make available to us answers that others, guarding other sheep in other valleys, have given, and thus to include them in the consultable record of what man has said."
            attribution="Clifford Geertz"
          />
        </div>
        <div className="right-window">
          <QuoteCard
            text="To look at the symbolic dimensions of social action- art, religion, ideology, science, law, morality, common sense is not to turn away from the existential dilemmas of life for some empyrean realm of de-emotionalized forms; it is to plunge into the midst of them. The essential vocation of interpretive anthropology is not to answer our deepest questions, but to make available to us answers that others, guarding other sheep in other valleys, have given, and thus to include them in the consultable record of what man has said."
            attribution="Clifford Geertz"
          />
        </div>
      </div>
    </div>
  );
}

function QuoteCard({ title, text, attribution }) {
  const classes = useStyles();
  return (
    <Card className={classes.Card}>
      <CardContent>
        <Typography variant="body1">"{text}"</Typography>
        <Typography variant="body1">-{attribution}</Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  Card: { height: "100%" }
}));

export default FavoriteThings;
