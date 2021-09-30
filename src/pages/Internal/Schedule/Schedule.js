import moment from "moment";

import { useState } from "react";
import { useDetectDevice } from "hooks";
import { datetime } from "utils";

import { Stack, Box, Heading, Text } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";
import { SecondaryButton } from "components";

import Modal from "components/complex/Modal/Modal";
import Calendar from "components/complex/Calendar/Calendar";

import Meetings from "./Meetings";

function Schedule() {
  const { isDesktop } = useDetectDevice();

  const today = moment().format("YYYY-MM-DD");

  const [date, setDate] = useState(today);
  const [open, setOpen] = useState(false);

  const displayDate = datetime.getFriendlyDate(date);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSelectDate = (value) => {
    setDate(value);
    handleCloseModal();
  };

  return (
    <Stack direction={isDesktop ? "row" : "column-reverse"} spacing="50px" align="flex-start">
      <Box width="100%">
        <Stack direction="row" justify="space-between" align="flex-start">
          <Box>
            <Heading size="md">Meetings</Heading>
            {isDesktop && <Text color="gray.500">{displayDate}</Text>}
          </Box>
          {isDesktop || (
            <SecondaryButton size="sm" leftIcon={<FaCalendar />} onClick={handleOpenModal}>
              {displayDate || "Select Date"}
            </SecondaryButton>
          )}
        </Stack>
        <Meetings date={date} />
      </Box>
      {isDesktop && (
        <Stack justify="center">
          <Calendar date={date} setDate={setDate} />
        </Stack>
      )}
      <Modal open={open} handleClose={handleCloseModal} width="330px">
        <Box padding="15px">
          <Calendar date={date} setDate={handleSelectDate} />
        </Box>
      </Modal>
    </Stack>
  );
}

export default Schedule;
