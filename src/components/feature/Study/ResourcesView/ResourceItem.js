import { ListItem, Text } from "@chakra-ui/react";
import { Link } from "components";

function ResourceItem({ resource }) {
  return (
    <ListItem marginY="4px">
      <Link to={resource.link}>
        <Text color="blue.500">{resource.name}</Text>
      </Link>
    </ListItem>
  );
}

export default ResourceItem;
