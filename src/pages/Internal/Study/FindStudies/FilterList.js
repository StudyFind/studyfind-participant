import { Box, Flex, Heading } from "@chakra-ui/react";

import { ToggleInput } from "components";

function FilterList({ filters, handleFilters }) {
  return (
    <Box my="25px">
      <Heading size="md" mb="10px">
        Filters
      </Heading>
      <Flex gridGap="10px" wrap="wrap">
        <ToggleInput
          name="acceptsHealthyVolunteers"
          label="Accepts Healthy Volunteers"
          value={filters.acceptsHealthyVolunteers}
          onChange={handleFilters}
        />
        <ToggleInput
          name="observational"
          label="Observational Studies"
          value={filters.observational}
          onChange={handleFilters}
        />
        <ToggleInput
          name="interventional"
          label="Interventional Studies"
          value={filters.interventional}
          onChange={handleFilters}
        />
        <ToggleInput
          name="hideEnrolled"
          label="Hide Enrolled Studies"
          value={filters.hideEnrolled}
          onChange={handleFilters}
        />
        <ToggleInput
          name="hideSaved"
          label="Hide Saved Studies"
          value={filters.hideSaved}
          onChange={handleFilters}
        />
        <ToggleInput
          name="onlySaved"
          label="Only Saved Studies"
          value={filters.onlySaved}
          onChange={handleFilters}
        />
      </Flex>
    </Box>
  );
}

export default FilterList;
