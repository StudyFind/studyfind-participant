import { useState } from "react";

import { auth, firestore, geostore } from "database/firebase";
import { useDocument, useCollection, useGeoCollection, useDetectTimezone, useDetectLocation } from "hooks";
import { UserContext, StudiesContext, ConfirmContext } from "context";

import { Switch, Route, Redirect } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Page } from "components";

import Confirm from "./Confirm";
import Sidebar from "./Sidebar";
import Verification from "views/Internal/Verification/Verification";
import FindStudies from "views/Internal/FindStudies/FindStudies";
import Notifications from "views/Internal/Notifications/Notifications";
import Account from "views/Internal/Account/Account";
import ViewStudy from "views/Internal/ViewStudy/ViewStudy";
import Screening from "views/Internal/ViewStudy/Screening";
import MyStudies from "views/Internal/MyStudies/MyStudies";

function Internal() {
  const { uid, email, emailVerified } = auth.currentUser;

  const userRef = firestore.collection("participants").doc(uid);
  const [range, setRange] = useState(100)
  // const studiesRef = firestore.collection("studies");
  const testStudiesRef = geostore.collection("teststudies")

  const [user] = useDocument(userRef);
  // const [studies] = useCollection(studiesRef);
  const testStudies = useGeoCollection(testStudiesRef, user, range)
  const [confirm, setConfirm] = useState(null);

  useDetectTimezone(user);
  useDetectLocation(user);

  return (
    <Flex>
      <UserContext.Provider value={user}>
        <StudiesContext.Provider value={{studies: testStudies, range: range, setRange: setRange}}>
          <ConfirmContext.Provider value={setConfirm}>
            <Sidebar name={user?.name} email={email} />
            <Box
              ml="280px"
              w="100%"
              minH={emailVerified ? "100vh" : "calc(100vh - 56px)"}
              mt={emailVerified ? "" : "40px"}
            >
              {emailVerified || <Verification />}
              {confirm && <Confirm {...confirm} handleClose={() => setConfirm(null)} />}
              <Page isLoading={!(user && testStudies)}>
                <Switch>
                  <Route exact path="/" component={FindStudies} />
                  <Route path="/search" component={FindStudies} />
                  <Route path="/notifications" component={Notifications} />
                  <Route path="/study/:studyID/screening" component={Screening} />
                  <Route path="/study/:studyID/:tab" component={ViewStudy} />
                  <Route path="/account/:tab" component={Account} />
                  <Route path="/mystudies/:studyID?/:action?" component={MyStudies} />
                  <Redirect to="/" />
                </Switch>
              </Page>
            </Box>
          </ConfirmContext.Provider>
        </StudiesContext.Provider>
      </UserContext.Provider>
    </Flex>
  );
}

export default Internal;
