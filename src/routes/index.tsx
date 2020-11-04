import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../constant/history";
import SearchPage from "../views/SearchPage";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={SearchPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
