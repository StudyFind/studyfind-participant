import React from "react";

import { FaSearch } from "react-icons/fa";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

function Search() {
  return (
    <InputGroup>
      <InputLeftElement color="gray.400" p="0.75rem" pointerEvents="none">
        <FaSearch size="md" />
      </InputLeftElement>
      <Input bg="white" placeholder="Search" />
    </InputGroup>
  );
}

export default Search;
