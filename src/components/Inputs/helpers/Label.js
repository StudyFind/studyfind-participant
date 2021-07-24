import React from "react";
import { FormLabel } from "@chakra-ui/react";

export const Label = ({ label }) => {
  return label ? <FormLabel>{label}</FormLabel> : null;
};
