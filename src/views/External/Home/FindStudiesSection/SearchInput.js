import React from "react";
import { Icon } from "@chakra-ui/react";
import { TextInput } from "./TextInput";
import { FaSearch } from "react-icons/fa";

function SearchInput({ value, onChange }) {
  return (
    <TextInput
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
