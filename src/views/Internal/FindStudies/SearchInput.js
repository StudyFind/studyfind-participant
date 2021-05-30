import React from "react";
import { Icon } from "@chakra-ui/react";
import { Input } from "components";
import { FaSearch } from "react-icons/fa";

function SearchInput({ value, onChange }) {
  return (
    <Input
      name="search"
      value={value}
      onChange={onChange}
      placeholder="Search"
      left={<Icon color="gray.400" as={FaSearch} />}
      leftWidth="40px"
    />
  );
}

export default SearchInput;
