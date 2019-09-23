import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import FavoriteThings from "../favoriteThings/FavoriteThings";
import Projects from "../projects/Projects";
import About from "../about/About";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Projects} />
      <Route exact path="/favorite-things" component={FavoriteThings} />
      <Route exact path="/about" component={About} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
