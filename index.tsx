import React from "react";
import ReactDOM from "react-dom";
import Main from "./app";
import Submit from "./pages/submit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/submit" component={Submit} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<AppRoutes />, document.getElementById("root"));
