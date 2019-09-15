import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../homePage/HomePage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
