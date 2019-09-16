import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import NavDrawer from "../navDrawer/NavDrawer.js";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div style={{ display: "flex" }}>
          <NavDrawer />
          <Routes />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
