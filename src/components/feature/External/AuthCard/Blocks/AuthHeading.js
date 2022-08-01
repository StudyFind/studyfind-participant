import { Box, Flex, Heading } from "@chakra-ui/react";
import AuthSwitch from "../AuthSwitch";

export const AuthHeading = ({ tab, setTab, children, ...rest }) => {
  return (
    <>
      <Flex position="relative" justify="space-between" paddingX="40px">
        <Heading fontSize="5xl" textAlign="left" fontWeight="400" {...rest}>
          {children}
        </Heading>
        {tab !== "forgotPassword" && (
          <Box position="absolute" right="40px" top="0">
            <AuthSwitch setTab={setTab} tab={tab} />
          </Box>
        )}
      </Flex>
    </>
  );
};
