import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Routes from "./Routes";
import NavDrawer from "../navDrawer/NavDrawer";
import NavMenuIcon from "../navDrawer/NavMenuIcon";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <Paper className="appPaper" style={{ minHeight: "100vh" }}>
      <CssBaseline />
      <Router>
        <NavMenuIcon setDrawerOpen={setDrawerOpen} />
        <NavDrawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
        <Routes />
      </Router>
    </Paper>
  );
}

export default App;

