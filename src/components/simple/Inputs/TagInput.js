import { useState } from "react";
import { useColor } from "hooks";
import { useMeasure } from "react-use";

import {
  Box,
  Button,
  Flex,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { TextInput, Form } from "components";

export const TagInput = ({
  name,
  label,
  value,
  error,
  onChange,
  buttonText,
  keepTagsSorted = false,
  allowDuplicates = false,
  formatTag = (v) => v,
}) => {
  const [textValue, setTextValue] = useState("");
  const [textError, setTextError] = useState("");

  const [ref, { width }] = useMeasure();

  const handleAddTag = () => {
    if (!textValue) {
      setTextError("Tag cannot be empty");
      return;
    }

    if (!allowDuplicates && value.includes(textValue)) {
      setTextError("Tag already exists");
      return;
    }

    const updated = [...value, textValue];

    if (keepTagsSorted) {
      updated.sort();
    }

    onChange(name, updated);

    setTextValue("");
  };

  const handleDeleteTag = (index) => {
    const updated = value.filter((_, i) => i !== index);
    onChange(name, updated);
  };

  const handleTextChange = (_, v) => {
    setTextValue(v);
    setTextError("");
  };

  const grayColor = useColor("gray.500", "gray.200");

  return (
    <Box width="100%">
      <Form onSubmit={handleAddTag}>
        <TextInput
          label={label}
          value={textValue}
          error={textError || error}
          right={
            <Button ref={ref} size="xs" type="submit" color={grayColor}>
              <FaPlus size="10px" />
              <Text marginLeft="4px">{buttonText || "Add Tag"}</Text>
            </Button>
          }
          rightWidth={width + 30}
          onChange={handleTextChange}
        />
        <Flex gridGap="8px" marginTop="10px" flexWrap="wrap">
          {value.map((v, i) => (
            <Tag key={i} colorScheme="blue">
              <TagLabel>{formatTag(v)}</TagLabel>
              <TagCloseButton onClick={() => handleDeleteTag(i)} />
            </Tag>
          ))}
        </Flex>
      </Form>
    </Box>
  );
};
