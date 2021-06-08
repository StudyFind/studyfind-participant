import { useContext } from "react";
import moment from "moment";
import styled from "styled-components";
import { UserContext } from "context";

import { Grid } from "@chakra-ui/react";
import { FaPlusCircle, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import RemindersCard from "./RemindersCard";

function RemindersView({ reminders, handleConfirm }) {
  return (
    <Grid gap="15px">
      {reminders &&
        reminders.map((reminder, i) => (
          <RemindersCard key={i} index={i} reminder={reminder} handleConfirm={handleConfirm} />
        ))}
    </Grid>
  );
}

export default RemindersView;
