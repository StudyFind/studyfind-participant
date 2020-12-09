import React from "react";
import styled from "styled-components";
import { Input, Select } from "components";
import { Checkbox, CheckboxGroup, FormLabel, Stack } from "@chakra-ui/react";

function ParticipantsFilter({ sort, setSort, status, setStatus, search, setSearch }) {
  return (
    <Filters>
      <Inputs>
        <Select
          label="Sort by"
          value={sort}
          onChange={(_, value) => setSort(value)}
          options={["fakename", "eligibility", "status"]}
        />
        <Input
          label="Search Participant"
          value={search}
          onChange={(_, value) => setSearch(value)}
        />
      </Inputs>
      <div>
        <FormLabel>Status</FormLabel>
        <Stack spacing={0}>
          {["interested", "screened", "consented", "rejected", "accepted"].map((name, index) => (
            <Checkbox
              key={index}
              isChecked={status[name]}
              onChange={(e) => setStatus({ ...status, [name]: e.target.checked })}
              textTransform="capitalize"
            >
              {name}
            </Checkbox>
          ))}
        </Stack>
      </div>
    </Filters>
  );
}

const Filters = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: stretch;
  grid-gap: 20px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ParticipantsFilter;
