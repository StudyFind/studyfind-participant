import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

import FilterToggle from "./FilterToggle";

function FilterList({ filters, handleFilters }) {
  return (
    <Box my="25px">
      <Heading size="md" mb="10px">
        Filters
      </Heading>
      <Flex gridGap="10px" wrap="wrap">
        <FilterToggle name="sex" value={filters.sex} onChange={handleFilters}>
          Sex
        </FilterToggle>
        <FilterToggle name="title" value={filters.title} onChange={handleFilters}>
          Title
        </FilterToggle>
        <FilterToggle name="type" value={filters.type} onChange={handleFilters}>
          Type
        </FilterToggle>
        <FilterToggle name="description" value={filters.description} onChange={handleFilters}>
          Description
        </FilterToggle>
        <FilterToggle name="conditions" value={filters.conditions} onChange={handleFilters}>
          Conditions
        </FilterToggle>
        <FilterToggle name="locations" value={filters.locations} onChange={handleFilters}>
          Address
        </FilterToggle>
        <FilterToggle name="hideEnrolled" value={filters.hideEnrolled} onChange={handleFilters}>
          Hide Enrolled Studies
        </FilterToggle>
        <FilterToggle name="hideSaved" value={filters.hideSaved} onChange={handleFilters}>
          Hide Saved Studies
        </FilterToggle>
      </Flex>
    </Box>
  );
}

export default FilterList;
