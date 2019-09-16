import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import NavDrawer from "../navDrawer/NavDrawer";
import BannerBar from "./BannerBar";
function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <BannerBar setDrawerOpen={setDrawerOpen} />
        <NavDrawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
        <Routes />
      </Router>
    </React.Fragment>
  );
}

export default App;
