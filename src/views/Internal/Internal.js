import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box, Flex } from "components";

import Sidebar from "./Sidebar";

import Settings from "views/Internal/Settings/Settings";
import FindStudies from "views/Internal/FindStudies/FindStudies";
import Notifications from "views/Internal/Notifications/Notifications";

function Internal() {
  return (
    <Flex bg="#f8f9fa">
      {/* <Sidebar /> */}
      <Box w="100%" minH="100vh">
        <Switch>
          <Route exact path="/" component={FindStudies} />
          <Route exact path="/find" component={FindStudies} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/settings" component={Settings} />
          <Redirect to="/" />
        </Switch>
      </Box>
    </Flex>
  );
}

export default Internal;
