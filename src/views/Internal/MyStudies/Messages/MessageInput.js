import { useState } from "react";
import moment from "moment";

import { auth } from "database/firebase";

import { Flex, IconButton } from "@chakra-ui/react";
import { Form, TextInput } from "components";
import { FaPaperPlane } from "react-icons/fa";

function MessageInput({ autoscroll, messagesRef }) {
  const [message, setMessage] = useState("");

  const handleChange = (_, value) => {
    setMessage(value);
  };

  const handleSubmit = () => {
    if (!message.trim()) {
      return;
    }

    const data = {
      text: message,
      read: false,
      time: moment().utc().valueOf(),
      user: auth.currentUser.uid,
    };

    messagesRef.add(data).then(() => {
      setMessage("");
      autoscroll();
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Flex
        width="100%"
        bg="white"
        position="fixed"
        bottom="0"
        borderTopWidth="1px"
        p="10px"
        gridGap="10px"
      >
        <TextInput
          value={message}
          onChange={handleChange}
          placeholder="Type your message here..."
          border="none"
          outline="none"
          autoComplete="off"
        />
        <IconButton
          type="submit"
          color="gray.500"
          bg="white"
          icon={<FaPaperPlane />}
          _hover={{ color: "white", bg: "green.500" }}
          _active={{ color: "white", bg: "green.600" }}
        />
      </Flex>
    </Form>
  );
}

export default MessageInput;
