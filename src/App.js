import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "./BaseLayout/PublicRoute";

import HomePage from "./Page/HomePage";

function App() {
  return (
    <Router>
      <PublicRoute path="/" exact component={HomePage} />
    </Router>
  );
}

export default App;
