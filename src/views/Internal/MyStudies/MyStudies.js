import React from "react";
import styled from "styled-components";

import { Heading, Box, Flex } from "@chakra-ui/react";

const studies = [
    {id: 12345,
    name: "study number one",
    status: "accepted",
    meetings: "monday 11am",
    reminders: "none",
    survey: "not applicable"},
    {id: 23456,
    name: "study number two",
    status: "pending",
    meetings: "tuesday 11am",
    reminders: "none",
    survey: "completed"},
    {id: 35467,
    name: "study number three",
    status: "accepted",
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
    <tr>{study.status}</tr>)}
    </td>

    <td >
    {studies.map((study) =>
    <tr>{study.meetings}</tr>)}
    </td>

    <td >
    {studies.map((study) =>
    <tr>{study.reminders}</tr>)}
    </td>

    <td >
    {studies.map((study) =>
    <tr>{study.survey}</tr>)}
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
