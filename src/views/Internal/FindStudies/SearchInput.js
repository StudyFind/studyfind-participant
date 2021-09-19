import React from "react";
import { Icon } from "@chakra-ui/react";
import { TextInput } from "components";
import { FaSearch } from "react-icons/fa";

function SearchInput({ value, onChange, onFocus, onBlur }) {
  return (
    <TextInput
      name="search"
      value={value}
      onChange={onChange}
      placeholder="Search"
      left={<Icon color="gray.400" as={FaSearch} />}
      leftWidth="40px"
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

export default SearchInput;
