import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { UserContext, StudiesContext } from "context";

import { auth, firestore } from "database/firebase";
import { useDocument, useCollection, useDetectTimezone } from "hooks";
import { Page } from "components";

import Sidebar from "./Sidebar";
import Settings from "views/Internal/Settings/Settings";
import FindStudies from "views/Internal/FindStudies/FindStudies";
import Notifications from "views/Internal/Notifications/Notifications";
import Account from "views/Internal/Account/Account";
import ViewStudy from "views/Internal/ViewStudy/ViewStudy";
import Questionnaire from "views/Internal/ViewStudy/Questionnaire";
import MyStudies from "views/Internal/MyStudies/MyStudies";

function Internal() {
  const { uid, email } = auth.currentUser;
  const [user] = useDocument(firestore.collection("participants").doc(uid));
  const [studies] = useCollection(firestore.collection("studies"));

  useDetectTimezone(user);

  return (
    <Flex>
      <UserContext.Provider value={user}>
        <StudiesContext.Provider value={studies}>
          <Sidebar name={user && user.name} email={email} />
          <Box ml="280px" w="100%" minH="100vh">
            <Page isLoading={!(user && studies)}>
              <Switch>
                <Route exact path="/" component={FindStudies} />
                <Route path="/search" component={FindStudies} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/settings" component={Settings} />
                <Route path="/study/:nctID" component={ViewStudy} />
                <Route path="/account" component={Account} />
                <Route path="/study/:nctID/questionnaire" component={Questionnaire} />
                <Route path="/mystudies" component={MyStudies} />
                <Redirect to={"/"} />
              </Switch>
            </Page>
          </Box>
        </StudiesContext.Provider>
      </UserContext.Provider>
    </Flex>
  );
}

export default Internal;
