import React, { useEffect } from "react";
import { useState } from "react";

import { auth, firestore } from "database/firebase";
import { useDocument, useCollection, useDetectTimezone } from "hooks";
import { UserContext, StudiesContext, ConfirmContext, AlgoliaContext } from "context";

import { Switch, Route, Redirect } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Page } from "components";
import algoliasearch from "algoliasearch/lite"

import Confirm from "./Confirm";
import Sidebar from "./Sidebar";
import Verification from "views/Internal/Verification/Verification";
import FindStudies from "views/Internal/FindStudies/FindStudies";
import Notifications from "views/Internal/Notifications/Notifications";
import Account from "views/Internal/Account/Account";
import ViewStudy from "views/Internal/ViewStudy/ViewStudy";
import Screening from "views/Internal/ViewStudy/Screening";
import MyStudies from "views/Internal/MyStudies/MyStudies";
import Feedback from "views/Internal/Feedback/Feedback";

function Internal() {
  const { uid, email, emailVerified } = auth.currentUser;

  const userRef = firestore.collection("participants").doc(uid);
  const studiesRef = firestore.collection("studies");
  const algoliaClient = algoliasearch("1PDWAYKDDH", "8c2524ee4fab1358d8eab1c32aff490f")
  const studiesIndex = algoliaClient.initIndex("test_StudyFind")

  const [user] = useDocument(userRef);
  const [studies] = useCollection(studiesRef);
  const [confirm, setConfirm] = useState(null);
  const [algoliaFilters, setAlgoilaFilters] = useState({
    search: "",
    title: false,
  })
  const [hits, setHits] = useState([])

  useEffect(() => {
    studiesIndex.search(algoliaFilters.search)
    .then((records) => {
      console.log(algoliaFilters.search)
      console.log(records.hits)
      setHits(records.hits)
    })
  }, [algoliaFilters])

  useDetectTimezone(user);

  return (
    <Flex>
      <UserContext.Provider value={user}>
        <AlgoliaContext.Provider value={{algoliaFilters, setAlgoilaFilters, hits}}>
        <StudiesContext.Provider value={studies}>
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
              <Page isLoading={!(user && studies)}>
                <Switch>
                  <Route exact path="/" component={FindStudies} />
                  <Route path="/search" component={FindStudies} />
                  <Route path="/notifications" component={Notifications} />
                  <Route path="/study/:studyID/screening" component={Screening} />
                  <Route path="/study/:studyID/:tab" component={ViewStudy} />
                  <Route path="/account/:tab" component={Account} />
                  <Route path="/mystudies/:studyID?/:action?" component={MyStudies} />
                  <Route path="/feedback" component={Feedback} />
                  <Redirect to="/" />
                </Switch>
              </Page>
            </Box>
          </ConfirmContext.Provider>
        </StudiesContext.Provider>
        </AlgoliaContext.Provider>
      </UserContext.Provider>
    </Flex>
  );
}

export default Internal;
