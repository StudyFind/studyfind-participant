import { useColor } from "hooks";
import {
  Box,
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

function SideDrawer({ heading, subheading, onClose, isOpen, children }) {
  const headBackground = useColor("white", "gray.900");
  const bodyBackground = useColor("#f8f9fa", "gray.800");

  const dividerColor = useColor("gray.200", "gray.700");

  return (
    <Drawer size="sm" placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay background="rgb(0, 0, 0, 0.75)" />
      <DrawerContent>
        <DrawerHeader
          borderBottomWidth="1px"
          borderBottomColor={dividerColor}
          background={headBackground}
        >
          <Flex align="center" justify="space-between">
            <Box>
              <Heading size="md" textTransform="capitalize">
                {heading}
              </Heading>
              {subheading && (
                <Text fontSize="0.9rem" fontWeight="400" color="gray.500">
                  {subheading}
                </Text>
              )}
            </Box>
            <DrawerCloseButton position="static" />
          </Flex>
        </DrawerHeader>
        <DrawerBody padding="0" background={bodyBackground}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SideDrawer;
