import { Text } from "@chakra-ui/react";

function FooterCopyright() {
  return (
    <Text fontSize="sm" marginTop="0 !important">
      &copy; {new Date().getFullYear()} StudyFind
    </Text>
  );
}

export default FooterCopyright;
