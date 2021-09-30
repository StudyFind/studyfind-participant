import { useState, useEffect } from "react";
import {
  useColor,
  useDetectDevice,
  useDocument,
  useCollection,
  useAutoUpdateTimezone,
} from "hooks";

import { auth, firestore } from "database/firebase";
import { UserContext, StudiesContext, ConfirmContext } from "context";
import { createGlobalStyle } from "styled-components";

import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Page } from "components";

import {
  FaBell,
  FaCalendarAlt,
  FaCommentAlt,
  FaUserCircle,
  FaSearch,
  FaClipboard,
} from "react-icons/fa";

import FindStudies from "./Study/FindStudies/FindStudies";
import YourStudies from "./Study/YourStudies/YourStudies";

import Sidebar from "components/feature/Sidebar/Sidebar";
import Verification from "./Verification/Verification";
import ViewStudy from "./Study/ViewStudy/ViewStudy";
import Notifications from "./Notifications/Notifications";
import Schedule from "./Schedule/Schedule";
import Account from "./Account/Account";
import Feedback from "./Feedback/Feedback";
import Screening from "./Study/Screening";

import ConfirmModal from "components/complex/ConfirmModal/ConfirmModal";
import Denied from "./Denied";

import { buildParticipantQuery } from "database/queries";

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
    height: 100%;
  }
  body {
    height: 100%;
    overflow: auto;
  }
`;

function Internal() {
  const [studies] = useCollection(firestore.collection("studies"));

  const { uid, displayName, email, emailVerified } = auth.currentUser;

  const participantQuery = buildParticipantQuery(uid);
  const [user] = useDocument(participantQuery);
  const [type, setType] = useState(null);

  const { isPhone } = useDetectDevice();

  const links = [
    { name: "Find Studies", path: "/", icon: <FaSearch /> },
    { name: "Your Studies", path: "/your-studies", icon: <FaClipboard /> },
    { name: "Notifications", path: "/notifications", icon: <FaBell /> },
    { name: "Schedule", path: "/schedule", icon: <FaCalendarAlt /> },
    { name: "Account", path: "/account/profile", icon: <FaUserCircle /> },
    { name: "Feedback", path: "/feedback", icon: <FaCommentAlt /> },
  ];

  const [confirm, setConfirm] = useState(null);

  useAutoUpdateTimezone(user);

  const history = useHistory();

  const fetchAndSetUserClaims = () => {
    auth.onIdTokenChanged(async (user) => {
      if (user) {
        const decodedToken = await user?.getIdTokenResult();
        setType(decodedToken?.claims?.usertype || "");
      }
    });
  };

  useEffect(() => {
    const redirect = localStorage.getItem("redirect");

    if (redirect) {
      history.push(redirect);
      localStorage.removeItem("redirect");
    }

    fetchAndSetUserClaims();
  }, []);

  // const verificationHeightDesktop = "56px";
  // const verificationHeightMobile = "128px";

  // const navigationWidthDesktop = "280px";
  // const navigationHeightMobile = "71px";

  // const exceptNavigationWidthDesktop = "calc(100vw - 280px)";
  // const exceptNavigationHeightMobile = "calc(100vw - 71px)";

  // const exceptVerificationHeightDesktop = "calc(100vw - 40px)";
  // const exceptVerificationHeightMobile = "calc(100vw - 128px)";

  const borderColor = useColor("gray.200", "gray.700");

  if (type === "researcher") {
    return <Denied email={auth.currentUser.email} />;
  }

  return (
    <UserContext.Provider value={user}>
      <StudiesContext.Provider value={studies}>
        <ConfirmContext.Provider value={setConfirm}>
          <Flex>
            <ConfirmModal {...confirm} open={!!confirm} handleClose={() => setConfirm(null)} />
            <GlobalStyle />
            <Box
              width={isPhone ? "100%" : "280px"}
              position="fixed"
              left="0"
              top="0"
              zIndex={500}
              borderColor={borderColor}
              borderRightWidth={isPhone ? "0" : "1px"}
              borderBottomWidth={isPhone ? "1px" : "0"}
            >
              <Sidebar name={displayName} email={email} links={links} />
            </Box>
            <Box
              width="100%"
              marginLeft={isPhone ? "0" : "280px"}
              marginTop={isPhone ? "71px" : emailVerified ? "0" : "40px"}
              marginBottom={isPhone && !emailVerified && "128px"}
            >
              {emailVerified || (
                <Box
                  minHeight={isPhone || "56px"}
                  width={isPhone ? "100vw" : "calc(100vw - 280px)"}
                  position="fixed"
                  top={isPhone || "0"}
                  bottom={isPhone && "0"}
                  zIndex={100}
                  background="gray.900"
                >
                  <Verification />
                </Box>
              )}
              <Page
                isLoading={!user || !studies}
                padding={isPhone ? "20px" : "40px"}
                minHeight={
                  isPhone
                    ? emailVerified
                      ? "calc(100vh - 71px)"
                      : "calc(100vh - 71px - 128px)"
                    : emailVerified
                    ? "100vh"
                    : "calc(100vh - 40px)"
                }
              >
                <Switch>
                  <Route exact path="/" component={FindStudies} />
                  <Route path="/search" component={FindStudies} />
                  <Route path="/notifications" component={Notifications} />
                  <Route path="/study/:studyID/screening" component={Screening} />
                  <Route path="/study/:studyID/:tab" component={ViewStudy} />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/account/:tab" component={Account} />
                  <Route path="/your-studies/:studyID?/:action?" component={YourStudies} />
                  <Route path="/feedback" component={Feedback} />
                  <Redirect to="/" />
                </Switch>
              </Page>
            </Box>
          </Flex>
        </ConfirmContext.Provider>
      </StudiesContext.Provider>
    </UserContext.Provider>
  );
}

export default Internal;
