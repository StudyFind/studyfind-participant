import { useState, useEffect } from "react";
import {
  useColor,
  useDetectDevice,
  useDocument,
  useAutoUpdateTimezone,
} from "hooks";

import { auth } from "database/firebase";
import { UserContext, ConfirmContext } from "context";
import { createGlobalStyle } from "styled-components";

import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Page } from "components";

import {
  FaBell,
  FaCalendarAlt,
  FaPoll,
  FaCommentAlt,
  FaUserCircle,
  FaQuestionCircle,
} from "react-icons/fa";

import Sidebar from "components/feature/Sidebar/Sidebar";
import Verification from "./Verification/Verification";
import ViewStudy from "./ViewStudy/ViewStudy";
import FindStudies from "./FindStudies/FindStudies";
import MyStudies from "./MyStudies/MyStudies";
import Notifications from "./Notifications/Notifications";
import Account from "./Account/Account";
import Feedback from "./Feedback/Feedback";

import ConfirmModal from "components/complex/ConfirmModal/ConfirmModal";
import { buildResearcherQuery } from "database/queries";

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
  const { uid, displayName, email, emailVerified } = auth.currentUser;

  const researcherQuery = buildResearcherQuery(uid);
  const [user] = useDocument(researcherQuery);

  const { isPhone } = useDetectDevice();

  const links = [
    { name: "Dashboard", path: "/", icon: <FaPoll /> },
    { name: "Notifications", path: "/notifications", icon: <FaBell /> },
    { name: "Schedule", path: "/schedule", icon: <FaCalendarAlt /> },
    { name: "Account", path: "/account/profile", icon: <FaUserCircle /> },
    { name: "Feedback", path: "/feedback", icon: <FaCommentAlt /> },
    { name: "FAQ", path: "/faq", icon: <FaQuestionCircle /> },
  ];

  const [confirm, setConfirm] = useState(null);

  useAutoUpdateTimezone(user);

  const history = useHistory();

  useEffect(() => {
    const redirect = localStorage.getItem("redirect");

    if (redirect) {
      history.push(redirect);
      localStorage.removeItem("redirect");
    }
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

  return (
    <UserContext.Provider value={user}>
      <ConfirmContext.Provider value={setConfirm}>
        <Flex>
          <ConfirmModal
            {...confirm}
            open={!!confirm}
            handleClose={() => setConfirm(null)}
          />
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
              isLoading={!user}
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
                <Route path="/study/:studyID/:tab" component={ViewStudy} />
                <Route path="/account/:tab" component={Account} />
                <Route
                  path="/mystudies/:studyID?/:action?"
                  component={MyStudies}
                />
                <Route path="/feedback" component={Feedback} />
                <Redirect to="/" />
              </Switch>
            </Page>
          </Box>
        </Flex>
      </ConfirmContext.Provider>
    </UserContext.Provider>
  );
}

export default Internal;
