import { useState } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Home from "pages/External/Home/Home";
import Auth from "pages/External/Auth/Auth";
import Team from "pages/External/Home/Team";

import { firestore } from "database/firebase";
import { useCollection } from "hooks";
import { StudiesContext, ConfirmContext } from "context";

import { Page } from "components";

import Confirm from "./Confirm";

function External() {
  const studiesRef = firestore.collection("studies");

  const [studies] = useCollection(studiesRef);
  const [confirm, setConfirm] = useState(null);

  console.log(studiesRef);
  console.log(studies);

  return (
    <StudiesContext.Provider value={studies}>
      <ConfirmContext.Provider value={setConfirm}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/team" component={Team} />
          <Redirect to="/" />
        </Switch>
      </ConfirmContext.Provider>
    </StudiesContext.Provider>
  );
}

export default External;
