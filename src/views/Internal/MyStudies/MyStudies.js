import React, {useState} from "react";
import styled from "styled-components";

import { auth, firestore } from "database/firebase";
import { useDocument, useCollection } from "hooks";

import { Spinner } from "components";

import { Heading, Box, Badge, Button, Input, useDisclosure } from "@chakra-ui/react";
import { FaCalendar, FaClock } from "react-icons/fa";


import {
  Flex,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";


const studies1 = [
    {id: 12345,
    name: "study number one",
    status: "accepted",
    meetings: "monday 11am",
    reminders: "none",
    survey: "not applicable"},
    {id: 23456,
    name: "study number two",
    status: "screened",
    meetings: "tuesday 11am",
    reminders: "insert reminder here!",
    survey: "completed"},
    {id: 35467,
    name: "study number three",
    status: "consented",
    meetings: "monday 11am",
    reminders: "none",
    survey: "completed"},
    {id: 45678,
    name: "study number four",
    status: "rejected",
    meetings: "none",
    reminders: "none",
    survey: "not applicable"},
];

const statusColors = {
    interested: "gray",
    screened: "purple",
    consented: "cyan",
    accepted: "green",
    rejected: "red",
  };

function MyStudies({ user }) {

  const {isOpen, onOpen, onClose} = useDisclosure();

  const [count, setCount] = useState("");


  const [studies, loading, error] = useCollection(
    firestore.collection("studies").where("nctID", "in", user.enrolled)
  );

  if (loading || !user || !studies) return <Spinner />;

  if (error)
    return (
      <Heading size="lg" mb="25px">
        Error!
      </Heading>
    );



  console.log(studies);
  if(studies){
  	console.log(studies[0]);
  }


  return (
    <div>

    <Heading size="lg" mb="25px">
      My Studies
    </Heading>

    <Box borderWidth="1px" rounded="md" bg="white">


<Row>

<table style={{width: "100%", align: "left"}}>

<tr >
    <th style={{textAlign: "left", paddingBottom: "5px"}}>Study ID</th>
    <th style={{textAlign: "left",  paddingBottom: "5px"}}>Study Name</th>
    <th style={{textAlign: "left",  paddingBottom: "5px"}}>Status</th>
    <th style={{textAlign: "left",  paddingBottom: "5px"}}>Scheduled Meetings</th>
    <th style={{textAlign: "left",  paddingBottom: "5px"}}>Reminders</th>
    <th style={{textAlign: "left",  paddingBottom: "5px"}}>Screening Survey</th>
</tr>


    <td>
    {studies.map((study) =>
    <tr>{study.id}</tr>)}
    </td>

    <div  style={{width: "30ch",  overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", wordBreak: "keep-all"}}>
    <td  >
    {studies.map((study) =>
    <tr >{study.title}</tr>)}
    </td>
    </div>


    <td >
    {studies1.map((study) =>
      <tr>
    <Badge
        size="sm"
        cursor="pointer"
        colorScheme={statusColors[study.status]}
      >
      {study.status}
     </Badge>
    </tr>)}

    </td>

    <td >
    {studies1.map((study) =>
    <tr><button onClick={() => {onOpen(); setCount(study.meetings)}}
    style={{display: "flex", gridGap: "5px"}}
    >
    <FaCalendar /> {study.meetings}</button></tr>)}
    </td>

    <td >
    {studies1.map((study) =>
    <tr ><button onClick={() => {onOpen(); setCount(study.reminders)}}><FaClock /></button></tr>)}
    </td>

    <td >
    {studies1.map((study) =>
    <tr><button>{study.survey}</button></tr>)}
    </td>


</table>


</Row>


    </Box>
    <Drawer size="md" placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Flex align="center" justify="space-between">
            <div>
              <Heading size="md" textTransform="capitalize">
                Reminders:
              </Heading>
            </div>
            <DrawerCloseButton position="static" />
          </Flex>
        </DrawerHeader>
        <DrawerBody p="25px" bg="#f8f9fa">
          <Flex gridGap="10px" py="20px">
          {count}
        </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    </div>
  );





};



const Row = styled.div`

  grid-gap: 10px;
  padding: 15px;

  border-bottom: 1px solid #f1f2f3;

  &:last-child {
    border-bottom: none;
  }
`;



export default MyStudies;
