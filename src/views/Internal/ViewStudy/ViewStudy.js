import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { UserContext, StudiesContext } from "context";

import { Flex, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Link, Message } from "components";
import { FaChevronLeft } from "react-icons/fa";

import Details from "./Details";
import Locations from "./Locations";
import Consent from "./Consent";

function ViewStudy() {
  const { nctID } = useParams();

  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);

  const study = studies.find((study) => study.id === nctID);

  return study ? (
    <>
      <Link to="/" isWrapper>
        <Flex align="center" gridGap="5px" color="blue.500">
          <FaChevronLeft /> Return to dashboard
        </Flex>
      </Link>
      <Tabs colorScheme="blue" h="100%" mt="20px">
        <TabList>
          <TabItem>Details</TabItem>
          <TabItem>Locations</TabItem>
          <TabItem>Consent</TabItem>
        </TabList>
        <TabPanels>
          <TabPanel pt="1px">
            <Details study={study} user={user} />
          </TabPanel>
          <TabPanel pt="1px">
            <Locations study={study} />
          </TabPanel>
          <TabPanel pt="1px">
            <Consent study={study} />
          </TabPanel>
        </TabPanels>
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
