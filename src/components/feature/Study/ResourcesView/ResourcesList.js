import { OrderedList } from "@chakra-ui/react";
import ResourceItem from "./ResourceItem";

function ResourcesList({ resources }) {
  return (
    <>
      <OrderedList>
        {resources.map((resource, i) => (
          <ResourceItem key={i} resource={resource} />
        ))}
      </OrderedList>
    </>
  );
}

export default ResourcesList;
