import React from "react";
import {
  Flex,
  Heading,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";

function StudyDrawer({ action, studyID, onClose, isOpen, children }) {
  return (
    <Drawer size="md" placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Flex align="center" justify="space-between">
            <div>
              <Heading size="md" textTransform="capitalize">
                {action}
              </Heading>
              <Text fontSize="0.9rem" fontWeight="400" color="gray.500">
                {studyID}
              </Text>
            </div>
            <DrawerCloseButton position="static" />
          </Flex>
        </DrawerHeader>
        <DrawerBody p="0" bg="#f8f9fa">
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default StudyDrawer;
