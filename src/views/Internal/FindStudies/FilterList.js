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
          Search Sex
        </FilterToggle>
        <FilterToggle name="title" value={filters.title} onChange={handleFilters}>
          Search Title
        </FilterToggle>
        <FilterToggle name="control" value={filters.control} onChange={handleFilters}>
          Accepts Healthy Volunteers
        </FilterToggle>
        <FilterToggle name="observational" value={filters.observational} onChange={handleFilters}>
          Observational Studies
        </FilterToggle>
        <FilterToggle name="interventional" value={filters.interventional} onChange={handleFilters}>
          Interventional Studies
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
