import { Switch, Route, Redirect } from "react-router-dom";

import Home from "pages/External/Home/Home";
import Auth from "pages/External/Auth/Auth";
import Team from "pages/External/Team/Team";

function External() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/team" component={Team} />
      <Redirect to="/auth" />
    </Switch>
  );
}

export default External;
