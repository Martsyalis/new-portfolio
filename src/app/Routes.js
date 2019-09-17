import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../home/Home";
import Projects from "../progects/Progects";
import About from "../about/About";

function Routes() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />

      <Redirect to="/home" />
    </Switch>
  );
}

export default Routes;
