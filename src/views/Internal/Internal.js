import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Page } from "components";

import { auth, firestore } from "database/firebase";
import { useDocument, useCollection } from "hooks";

import Sidebar from "./Sidebar";

import Settings from "views/Internal/Settings/Settings";
import FindStudies from "views/Internal/FindStudies/FindStudies";
import Notifications from "views/Internal/Notifications/Notifications";
import MyStudies from "views/Internal/MyStudies/MyStudies";


function Internal() {
  const { uid } = auth.currentUser;
  const [user] = useDocument(firestore.collection("participants").doc(uid));
  const [studies] = useCollection(firestore.collection("studies"));

  const pages = [
    { path: "/", component: <FindStudies studies={studies} /> },
    { path: "/settings", component: <Settings /> },
    { path: "/search", component: <FindStudies studies={studies} /> },
    { path: "/mystudies", component: <MyStudies user={user} studies={studies}/> },
    { path: "/notifications", component: <Notifications /> },
  ];

  return (
    <Flex bg="#f8f9fa">
      <Sidebar />
      <Box ml="280px" w="100%" minH="100vh">
        <Page isLoading={!user}>
          <Switch>
            {pages.map(({ path, component }, index) => (
              <Route exact path={path} key={index}>
                {component}
              </Route>
            ))}
            <Redirect to={"/"} />
          </Switch>
        </Page>
      </Box>
    </Flex>
  );
}

export default Internal;
