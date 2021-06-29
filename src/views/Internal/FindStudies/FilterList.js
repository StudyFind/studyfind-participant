import { 
  Box, 
  Flex, 
  Heading,
} from "@chakra-ui/react";

import FilterToggle from "./FilterToggle";

function FilterList({ filters, handleFilters }) {

  // TODO: Figure out unit with timezone, Put on second line, toggle on off, fix UI

  return (
    <Box my="25px">
      <Heading size="md" mb="10px">
        Filters
      </Heading>
      <Flex gridGap="10px" wrap='wrap'>
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
        <FilterToggle name="range" value={filters.range} onChange={handleFilters}>
          Filter by Distance
        </FilterToggle>
      </Flex>
    </Box>
  );
}

export default FilterList;
