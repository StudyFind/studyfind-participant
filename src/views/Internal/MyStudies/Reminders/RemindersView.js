import React, { useContext } from "react";
import moment from "moment";
import styled from "styled-components";
import { UserContext } from "context";

import { Heading, Box, Grid, Flex, IconButton, Button, Text, Tag, TagLabel } from "@chakra-ui/react";
import { FaPlusCircle, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import { helpers } from "functions";
import RemindersCard from "./RemindersCard"

function RemindersView({
  reminders,
  formatDate,
  getDaysFromOffsets,
  getTimesFromOffsets,
  handleConfirm
}) {
  const user = useContext(UserContext);

  const weekdayAcronyms = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <Grid gap="15px">
      {reminders &&
        reminders.map((reminder, i) => (
          <RemindersCard index={i} reminder={reminder} handleConfirm={handleConfirm} />
        ))}
    </Grid>
  );
}

export default RemindersView;
