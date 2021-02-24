import React from "react";
import styled from "styled-components";

import { Heading, Box, Flex, Badge } from "@chakra-ui/react";
import { FaCalendar, FaClock } from "react-icons/fa";


const studies = [
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
    reminders: "none",
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

function MyStudies() {
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

    <td >
    {studies.map((study) =>
    <tr>{study.name}</tr>)}
    </td>

    <td >
    {studies.map((study) =>
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
    {studies.map((study) =>
    <tr><button style={{display: "flex", gridGap: "5px"}}><FaCalendar /> {study.meetings}</button></tr>)}
    </td>

    <td >
    {studies.map((study) =>
    <tr ><button><FaClock /></button></tr>)}
    </td>

    <td >
    {studies.map((study) =>
    <tr><button>{study.survey}</button></tr>)}
    </td>


</table>


</Row>


    </Box>

    </div>
  )
}


const Row = styled.div`

  grid-gap: 10px;
  padding: 15px;

  border-bottom: 1px solid #f1f2f3;

  &:last-child {
    border-bottom: none;
  }
`;



export default MyStudies;
