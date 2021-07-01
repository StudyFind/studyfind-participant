import React from "react";
import { useState } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Home from "views/External/Home/Home";
import Auth from "views/External/Auth/Auth";
import Team from "views/External/Team/Team";

import { firestore } from "database/firebase";
import { useCollection } from "hooks";
import { StudiesContext, ConfirmContext } from "context";

import { Page } from "components";

import Confirm from "./Confirm";

function External() {

  const studiesRef = firestore.collection("studies");

  const [studies] = useCollection(studiesRef);
  const [confirm, setConfirm] = useState(null);

  return (
    <StudiesContext.Provider value={studies}>
      <ConfirmContext.Provider value={setConfirm}>
        {confirm && <Confirm {...confirm} handleClose={() => setConfirm(null)} />}
        <Page isLoading={!studies}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/team" component={Team} />
            <Redirect to="/" />
          </Switch>
        </Page>
        </ConfirmContext.Provider>
    </StudiesContext.Provider>
  );
}

export default External;
