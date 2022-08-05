import Internal from "pages/Internal/Internal";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "database/firebase";
import Auth from "pages/External/Auth/Auth";

const NoParticipantPageTemp = () => {
  return <Redirect to="/auth" />;
};

const ParticipantRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <NoParticipantPageTemp />
        </Route>
        <Route exact path={`/auth`}>
          <AuthLogin />
        </Route>
        <Route path={`/dashboard`}>
          <PrivateRoute />
        </Route>
      </Switch>
    </>
  );
};

const AuthLogin = () => {
  const [cred] = useAuthState(auth);
  return (
    <Route render={() => (cred ? <Redirect to="/dashboard" /> : <Auth />)} />
  );
};

// Redirect to auth, if user is not logged in
const PrivateRoute = () => {
  const [cred] = useAuthState(auth);
  return (
    <Route render={() => (cred ? <Internal /> : <Redirect to="/auth" />)} />
  );
};

const ParticipantSide = () => {
  return <ParticipantRoutes />;
};
export default ParticipantSide;
