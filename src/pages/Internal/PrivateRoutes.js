import Internal from "pages/Internal/Internal";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "database/firebase";
import Auth from "pages/External/Auth/Auth";

const ParticipantLogin = () => {
  let { path } = useRouteMatch();
  return <Route exact path={`${path}/auth`} component={Auth} />;
};

const Participant = () => {
  return (
    <Route path="/participant">
      <Switch>
        <PrivateRoute />
      </Switch>
    </Route>
  );
};
export default Participant;

const PrivateRoute = () => {
  const [cred] = useAuthState(auth);

  return <Route render={() => (cred ? <Internal /> : <ParticipantLogin />)} />;
};
