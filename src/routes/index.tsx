import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../constant/history";
import SearchPage from "../views/SearchPage";
import AuthorPage from "../views/AuthorPage";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={SearchPage} exact />
        <Route path="/author/:id" component={AuthorPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
