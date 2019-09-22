import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../home/Home";
import Projects from "../projects/Projects";
import About from "../about/About";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Projects} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />

      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
