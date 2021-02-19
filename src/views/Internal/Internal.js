import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Page } from "components";

import { auth, firestore } from "database/firebase";
import { useDocument } from "hooks";

import Sidebar from "./Sidebar";

import Settings from "views/Internal/Settings/Settings";
import FindStudies from "views/Internal/FindStudies/FindStudies";
import Notifications from "views/Internal/Notifications/Notifications";
import Account from "views/Internal/Account/Account"

function Internal() {
  const { uid } = auth.currentUser;
  const [user] = useDocument(firestore.collection("participants").doc(uid));

  return (
    <Flex bg="#f8f9fa">
      <Sidebar />
      <Box ml="280px" w="100%" minH="100vh">
        <Page isLoading={!user}>
          <Switch>
            <Route exact path="/" component={FindStudies} />
            <Route exact path="/search" component={FindStudies} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/account" component={Account} />
            <Redirect to="/" />
          </Switch>
        </Page>
      </Box>
    </Flex>
  );
}

export default Internal;
