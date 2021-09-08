import { Heading, Text } from "@chakra-ui/react";

function NoteDetails({ title, body }) {
  return (
    <>
      <Heading size="md" marginBottom="4px">
        {title}
      </Heading>
      <Text>{body}</Text>
    </>
  );
}

export default NoteDetails;
