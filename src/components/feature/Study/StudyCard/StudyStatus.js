import { Badge } from "@chakra-ui/react";

function StudyStatus({ activated }) {
  return activated ? (
    <Badge colorScheme="green">Active</Badge>
  ) : (
    <Badge colorScheme="red">Inactive</Badge>
  );
}

export default StudyStatus;
