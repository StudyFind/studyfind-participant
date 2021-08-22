import React from "react";

import {
  Button,
  Text,
  Flex,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { SocialIcon } from "react-social-icons";

function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify="space-between"
        style={{ backgroundColor: "#377DFF", padding: "15px 25px" }}
      >
        <div>
          <Text color="white" onClick={onOpen}>
            Feedback <QuestionIcon />{" "}
          </Text>
        </div>
        <div>
          <SocialIcon
            url="https://www.linkedin.com/company/studyfind/"
            fgColor="white"
            style={{ height: 25, width: 25, margin: "0px 3px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/studyfindco/"
            fgColor="white"
            style={{ height: 25, width: 25, margin: "0px 3px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCqOfwBbtyfMg-Hog0tj30qQ"
            fgColor="white"
            style={{ height: 25, width: 25, margin: "0px 3px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.instagram.com/studyfindco/?hl=en"
            fgColor="white"
            style={{ height: 25, width: 25, margin: "0px 3px" }}
            target="_blank"
          />
        </div>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Enter your feedback here"></Input>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" onClick={onClose} marginRight="5px">
              Close
            </Button>
            <Button colorScheme="blue">Submit Feedback</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Footer;
