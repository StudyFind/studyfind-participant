import { Flex } from "@chakra-ui/react";
import { Link, ActionButton } from "components";
import { FaPencilAlt, FaTrashAlt, FaPhone } from "react-icons/fa";

function MeetingButtons({ link, confirmed, handleEdit, handleDelete }) {
  return (
    <Flex gridGap="4px">
      <Link to={link} isWrapper>
        <ActionButton icon={<FaPhone />} hint={confirmed ? "Join" : "Pending"} colorScheme="gray" />
      </Link>
      <ActionButton icon={<FaPencilAlt />} hint="Edit" colorScheme="blue" onClick={handleEdit} />
      <ActionButton icon={<FaTrashAlt />} hint="Delete" colorScheme="red" onClick={handleDelete} />
    </Flex>
  );
}

export default MeetingButtons;
