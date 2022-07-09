import Internal from "pages/Internal/Internal";
import { Route, useRouteMatch, Switch, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "database/firebase";
import Auth from "pages/External/Auth/Auth";

const NoParticipantPageTemp = () => {
  return <Redirect to="participant/auth" />;
};

const ParticipantRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path} component={NoParticipantPageTemp} />
        <Route exact path={`${path}/auth`}>
          <AuthLogin />
        </Route>
        <Route path={`${path}/dashboard`}>
          <PrivateRoute />
        </Route>
      </Switch>
    </>
  );
};

const AuthLogin = () => {
  const [cred] = useAuthState(auth);
  return (
    <Route
      render={() =>
        cred ? <Redirect to="/participant/dashboard" /> : <Auth />
      }
    />
  );
};

const PrivateRoute = () => {
  const [cred] = useAuthState(auth);
  return (
    <Route
      render={() => (cred ? <Internal /> : <Redirect to="/participant/auth" />)}
    />
  );
};

const ParticipantSide = () => {
  return <Route path="/participant" component={ParticipantRoutes}></Route>;
};
export default ParticipantSide;
