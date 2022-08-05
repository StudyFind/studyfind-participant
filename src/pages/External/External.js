import { Switch, Route, Redirect } from "react-router-dom";

import Home from "pages/External/Home/Home";
import Team from "pages/External/Team/Team";

function External() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Redirect to={"/"} />
      </Switch>
    );
  
}

export default External;
