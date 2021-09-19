import React from "react";
import { Flex, Heading, OrderedList, ListItem, Box } from "@chakra-ui/react";
import { Link, Message } from "@studyfind/components";

function Locations({ study }) {
  return study?.locations?.length ? (
    <>
      <Flex justify="space-between" align="center" my="15px" h="40px">
        <Heading fontSize="28px">Locations</Heading>
      </Flex>
      <Flex direction="column" align="flex-start">
        <OrderedList>
          {study.locations.map((location, index) => {
            const address = `${location.localLocation.trim()}, ${location.nationalLocation.trim()}`;
            const cleaned = address.trim().split(" ").join("+");
            const url = `https://www.google.com/maps?saddr=My+Location&daddr=${cleaned}`;

            return (
              <ListItem key={index} my="4px">
                <Link to={url}>{address}</Link>
              </ListItem>
            );
          })}
        </OrderedList>
      </Flex>
    </>
  ) : (
    <Box h="500px">
      <Message
        status="failure"
        title="No locations"
        description="This study does not have any locations listed!"
      />
    </Box>
  );
}

export default Locations;
