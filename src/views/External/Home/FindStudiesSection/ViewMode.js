import React from "react";
import { Flex, Tooltip, IconButton } from "@chakra-ui/react";
import { FaThLarge, FaMapMarkerAlt } from "react-icons/fa";

function ViewMode({ view, setView }) {
  return (
    <Flex gridGap="10px">
      <Flex>
        <Tooltip label="Grid View">
          <IconButton
            icon={<FaThLarge />}
            color={view === "grid" ? "blue.500" : "gray.500"}
            bg={view === "grid" ? "blue.100" : "gray.100"}
            _hover={view === "grid" ? "blue.100" : "gray.100"}
            _active={view === "grid" ? "blue.100" : "gray.100"}
            borderTopRightRadius="0"
            borderBottomRightRadius="0"
            onClick={() => setView("grid")}
          />
        </Tooltip>
        <Tooltip label="Map View">
          <IconButton
            icon={<FaMapMarkerAlt />}
            color={view === "map" ? "blue.500" : "gray.500"}
            bg={view === "map" ? "blue.100" : "gray.100"}
            _hover={view === "map" ? "blue.100" : "gray.100"}
            _active={view === "map" ? "blue.100" : "gray.100"}
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
            onClick={() => setView("map")}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
}

export default ViewMode;
