import { Flex } from "@chakra-ui/react";
import { ActionButton } from "components";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function RemindersButtons({ handleEdit, handleDelete }) {
  return (
    <Flex gridGap="4px">
      <ActionButton icon={<FaPencilAlt />} hint="Edit" colorScheme="blue" onClick={handleEdit} />
      <ActionButton icon={<FaTrashAlt />} hint="Delete" colorScheme="red" onClick={handleDelete} />
    </Flex>
  );
}

export default RemindersButtons;
