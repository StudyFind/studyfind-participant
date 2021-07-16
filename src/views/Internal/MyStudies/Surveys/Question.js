import { useEffect } from "react";
import { Text, Box, Flex, Stack, Checkbox } from "@chakra-ui/react";
import {
  TextareaInput,
  RadioInput,
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

  const handleCheckbox = (optionIndex, checked) => {
    const updated = response.values;
    updated[optionIndex] = checked;
    handleChange(index, { values: updated });
  };

  const handleSelectFile = (index, file) => {
    const name = file?.name || "";
    handleFiles(index, name, file);
  };

  useEffect(() => {
    if (type === "checkboxes") {
      const values = Array(options.length);
      handleChange(index, { values: values.fill(false) });
    } else {
      handleChange(index, "");
    }
  }, []);

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
          limit={constraints?.characterMax}
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
        <Stack>
          {options?.map((o, i) => (
            <Checkbox
              key={i}
              isChecked={response?.values && response.values[i]}
              onChange={(e) => handleCheckbox(i, e.target.checked)}
            >
              {o}
            </Checkbox>
          ))}
        </Stack>
      )}
      {type === "dropdown" && (
        <SelectInput
          name={index}
          value={response}
          placeholder="Select"
          options={transformOptions(options)}
          onChange={handleChange}
        />
      )}
      {type === "number" && (
        <TextInput
          type="number"
          name={index}
          value={response}
          onChange={handleChange}
          step={constraints?.numberInterval}
          min={constraints?.numberMin}
          max={constraints?.numberMax}
        />
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
        <FileInput
          name={index}
          onChange={handleSelectFile}
          accept={`${constraints?.pdfAllowed ? "application/pdf, " : ""}${
            constraints?.docAllowed ? "application/msword, " : ""
          }${constraints?.jpgAllowed ? "image/jpeg, " : ""}${
            constraints?.pngAllowed ? "image/png, " : ""
          }`}
        />
      )}
      {type === "link" && (
        <LinkInput
          name={index}
          value={response}
          placeholder={"Enter a link"}
          onChange={handleChange}
        />
      )}
      {type === "date" && (
        <DateInput
          name={index}
          value={response}
          onChange={handleChange}
          max={constraints?.dateMax}
          min={constraints?.dateMin}
        />
      )}
      {type === "time" && (
        <TextInput
          name={index}
          type="time"
          value={response}
          onChange={handleChange}
          max={constraints?.timeMax}
          min={constraints?.timeMin}
          step={parseInt(constraints?.timeInterval) * 60}
        />
      )}
    </Box>
  );
}

export default Question;
