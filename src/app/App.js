import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import NavDrawer from "./NavDrawer";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div  >
          <NavDrawer />
          <Routes />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
