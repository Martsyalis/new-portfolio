import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../homePage/HomePage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/projects" component={HomePage} />
      <Route exact path="/about" component={HomePage} />

      <Redirect to="/home" />
    </Switch>
  );
}

export default Routes;
