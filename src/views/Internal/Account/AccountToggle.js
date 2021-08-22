import React from "react";
import { Flex, Text, Switch } from "@chakra-ui/react";

function AccountToggle({ label, name, value, onChange }) {
  return (
    <Flex align="center" gridGap="8px">
      <Switch name={name} isChecked={value} onChange={(e) => onChange(name, e.target.checked)} />
      <Text>{label}</Text>
    </Flex>
  );
}

export default AccountToggle;
