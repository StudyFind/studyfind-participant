import { Flex } from "@chakra-ui/react";

import NoteDetails from "./NoteDetails";

import Wrapper from "../Wrapper";
import Buttons from "../Buttons";
import Time from "../Time";

function NoteCard({ note, handleEdit, handleDelete }) {
  return (
    <Wrapper>
      <NoteDetails title={note.title} body={note.body} />
      <Flex justify="space-between" align="center" marginTop="16px">
        <Buttons handleEdit={handleEdit} handleDelete={handleDelete} />
        <Time time={note.time} />
      </Flex>
    </Wrapper>
  );
}

export default NoteCard;
