import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Home from "views/External/Home/Home";
import Auth from "views/External/Auth/Auth";
import Team from "views/External/Team/Team";

function External() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/team" component={Team} />
      <Redirect to="/" />
    </Switch>
  );
}

export default External;
