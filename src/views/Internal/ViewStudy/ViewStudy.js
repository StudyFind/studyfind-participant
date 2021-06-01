import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useTabs } from "hooks";

import { UserContext, StudiesContext } from "context";

import { Flex, Tabs, Tab, TabList, TabPanels } from "@chakra-ui/react";
import { Link, Message } from "components";
import { FaChevronLeft } from "react-icons/fa";

import Details from "./Details";
import Locations from "./Locations";
import Consent from "./Consent";

function ViewStudy() {
  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);
  const { studyID } = useParams();
  const study = studies.find((study) => study.id === studyID);

  const tabs = [
    { name: "details", content: <Details user={user} study={study} /> },
    { name: "locations", content: <Locations study={study} /> },
    { name: "consent", content: <Consent study={study} /> },
  ];

  const [tabIndex, setTabIndex] = useTabs(`/study/${studyID}`, tabs);

  return study ? (
    <>
      <Link to="/" isWrapper>
        <Flex align="center" gridGap="5px" color="blue.500">
          <FaChevronLeft /> Return to dashboard
        </Flex>
      </Link>
      <Tabs colorScheme="blue" h="100%" index={tabIndex} pt="20px">
        <TabList>
          {tabs.map((t, i) => (
            <TabItem key={i} className="tab" onClick={() => setTabIndex(i)}>
              {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
            </TabItem>
          ))}
        </TabList>
        <TabPanels>{tabs[tabIndex]?.content}</TabPanels>
      </Tabs>
    </>
  ) : (
    <Message
      status="failure"
      title="Study not found!"
      description="We cannot find the study you're looking for"
    />
  );
}

const TabItem = styled(Tab)`
  font-weight: 600;
  color: rgb(161, 175, 192);
  display: flex;
  grid-gap: 8px;
  align-items: center;

  &:active {
    background: transparent !important;
    color: rgb(101, 115, 132);
  }

  &:focus {
    box-shadow: none !important;
  }
`;

export default ViewStudy;
