import { useColor } from "hooks";
import { datetime } from "utils";

import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import { ActionButton } from "components";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function NoteCard({ note, handleEdit, handleDelete }) {
  const displayDate = datetime.getFriendlyDate(note.time);
  const displayTime = datetime.get12HourTime(note.time);

  const border = useColor("gray.200", "gray.700");
  const background = useColor("white", "gray.900");

  return (
    <Box
      borderWidth="1px"
      borderColor={border}
      background={background}
      padding="15px"
      rounded="md"
      width="100%"
    >
      <Text color="gray.600">{note.user}</Text>
      <Heading size="md" marginBottom="8px">
        {note.title}
      </Heading>
      <Text>{note.body}</Text>
      <Flex justify="space-between" align="center" marginTop="16px">
        <Flex gridGap="4px">
          <ActionButton
            icon={<FaPencilAlt />}
            hint="Edit"
            colorScheme="blue"
            onClick={() => handleEdit(note)}
          />
          <ActionButton
            icon={<FaTrashAlt />}
            hint="Delete"
            colorScheme="red"
            onClick={() => handleDelete(note)}
          />
        </Flex>
        <Text color="gray.500" fontSize="0.9rem">
          {displayDate} at {displayTime}
        </Text>
      </Flex>
    </Box>
  );
}

export default NoteCard;
