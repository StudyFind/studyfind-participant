import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";

import FilterToggle from "./FilterToggle";
import { ChevronDownIcon } from "@chakra-ui/icons";

function FilterList({ filters, handleFilters }) {
  let [isCompact, setIsCompact] = useState(false);

  // identify if window is compact
  const handleWindowSizeChange = () => {
    if (window.innerWidth < 800) {
      setIsCompact(true);
    } else {
      setIsCompact(false);
    }
  };

  // check for window size change
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  // update if the window is compact
  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  if (isCompact) {
    return (
      <Box my="25px">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Filters
          </MenuButton>
          <MenuList>
            <MenuItem>
              <FilterToggle
                name="control"
                value={filters.control}
                onChange={handleFilters}
              >
                Accepts Healthy Volunteers
              </FilterToggle>
            </MenuItem>
            <MenuItem>
              <FilterToggle
                name="observational"
                value={filters.observational}
                onChange={handleFilters}
              >
                Hide Observational Studies
              </FilterToggle>
            </MenuItem>
            <MenuItem>
              <FilterToggle
                name="interventional"
                value={filters.interventional}
                onChange={handleFilters}
              >
                Hide Interventional Studies
              </FilterToggle>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  } else {
    return (
      <Box my="25px">
        <Heading size="md" mb="10px">
          Filters
        </Heading>
        <Flex gridGap="10px" wrap="wrap">
          <FilterToggle
            name="control"
            value={filters.control}
            onChange={handleFilters}
          >
            Accepts Healthy Volunteers
          </FilterToggle>
          <FilterToggle
            name="observational"
            value={filters.observational}
            onChange={handleFilters}
          >
            Hide Observational Studies
          </FilterToggle>
          <FilterToggle
            name="interventional"
            value={filters.interventional}
            onChange={handleFilters}
          >
            Hide Interventional Studies
          </FilterToggle>
        </Flex>
      </Box>
    );
  }
}

export default FilterList;
