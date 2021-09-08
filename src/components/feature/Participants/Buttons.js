import { Flex } from "@chakra-ui/react";
import { ActionButton, Link } from "components";
import { FaPencilAlt, FaPhone, FaTrashAlt } from "react-icons/fa";

function Buttons({ link, confirmed, handleEdit, handleDelete }) {
  return (
    <Flex gridGap="4px">
      {link && (
        <Link to={link} isWrapper>
          <ActionButton
            icon={<FaPhone />}
            hint={confirmed ? "Join" : "Pending"}
            colorScheme="gray"
          />
        </Link>
      )}
      {handleEdit && (
        <ActionButton
          icon={<FaPencilAlt />}
          hint="Edit"
          colorScheme="blue"
          onClick={handleEdit}
        />
      )}
      {handleDelete && (
        <ActionButton
          icon={<FaTrashAlt />}
          hint="Delete"
          colorScheme="red"
          onClick={handleDelete}
        />
      )}
    </Flex>
  );
}

export default Buttons;
