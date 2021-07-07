import {
  Text,
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  TextareaInput,
  RadioInput,
  MultiselectInput,
  SelectInput,
  TextInput,
  EmailInput,
  PhoneInput,
  FileInput,
  LinkInput,
  DateInput,
} from "components";

function Question({ index, question, response, handleChange, handleFiles }) {
  const { prompt, type, options, constraints } = question;

  const transformOptions = (options) => {
    return options.filter((o) => o.length > 0).map((o) => ({ value: o, label: o }));
  };

  const handleNumberChange = (valueAsNumber) => {
    handleChange(index, valueAsNumber);
  };

  const handleSelect = (index, file) => {
    const name = file?.name || "";
    handleFiles(index, name, file);
  };

  //TODO errors constraints

  return (
    <Box borderWidth="1px" bg="white" rounded="md" p="15px">
      <Flex justify="space-between">
        <Text fontSize="xs" color="gray.500">
          {"Question " + (index + 1)}
        </Text>
        {constraints?.required && (
          <Text align="flex-end" fontSize="xs" as="i" color="gray.500">
            Required
          </Text>
        )}
      </Flex>
      <Text mb="10px">{prompt}</Text>
      {["short answer", "long answer"].includes(type) && (
        <TextareaInput
          name={index}
          value={response}
          placeholder={"Respond"}
          onChange={handleChange}
        />
      )}
      {type === "multiple choice" && (
        <RadioInput
          name={index}
          value={response}
          options={transformOptions(options)}
          onChange={handleChange}
        />
      )}
      {type === "checkboxes" && (
        <MultiselectInput
          name={index}
          value={response}
          label={"TODO"}
          options={transformOptions(options)}
          onChange={handleChange}
        />
      )}
      {type === "dropdown" && (
        <SelectInput
          name={index}
          value={response}
          options={transformOptions(options)}
          onChange={handleChange}
        />
      )}
      {type === "number" && (
        <NumberInput
          step={constraints?.numberInterval}
          min={constraints?.numberMin}
          max={constraints?.numberMax}
          value={response}
          onChange={handleNumberChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )}
      {type === "email" && (
        <EmailInput
          name={index}
          value={response}
          placeholder={"Enter an email"}
          onChange={handleChange}
        />
      )}
      {type === "phone" && (
        <PhoneInput
          name={index}
          value={response}
          placeholder={"Enter a phone number"}
          onChange={handleChange}
        />
      )}
      {type === "file" && (
        <FileInput name={index} onChange={handleSelect} accept="application/pdf" />
      )}
      {type === "link" && (
        <LinkInput
          name={index}
          value={response}
          placeholder={"Enter a link"}
          onChange={handleChange}
        />
      )}
      {type === "date" && <DateInput name={index} value={response} onChange={handleChange} />}
      {type === "time" && ( //not utc timestamp b/c can have time w/o date
        <TextInput name={index} type="time" value={response} onChange={handleChange} />
      )}
    </Box>
  );
}

export default Question;
