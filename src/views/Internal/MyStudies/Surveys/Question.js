import { useEffect } from "react";
import {
  Text,
  Box,
  Flex,
  Stack,
  Checkbox,
  FormControl,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
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
import { Error } from "components/Inputs/helpers";

function Question({ index, question, response, error, handleChange, handleFiles }) {
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

  const handleIncrement = () => {
    const interval = Number(constraints?.numberInterval) || 1;
    const min = Number(constraints?.numberMin) || 0;
    const max = Number(constraints?.numberMax) || null;
    const resp = Number(response);
    const higher = resp - ((resp - min) % interval) + interval;

    if (!resp || resp < min) {
      handleChange(index, String(min));
    } else if (max && !(higher > max)) {
      handleChange(index, String(higher));
    }
  };

  const handleDecrement = () => {
    const interval = Number(constraints?.numberInterval) || 1;
    const min = Number(constraints?.numberMin) || 0;
    const max = Number(constraints?.numberMax) || null;
    const resp = Number(response);
    const lower = resp - ((resp - min) % interval) - interval;

    if ((max && !resp) || resp > max) {
      handleChange(index, String(max - ((max - min) % interval)));
    } else if (!(lower < min)) {
      handleChange(index, String(lower));
    }
  };

  useEffect(() => {
    if (type === "checkboxes") {
      const values = Array(options.length);
      handleChange(index, { values: values.fill(false) });
    }
  }, []);

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
          error={error}
          placeholder={"Respond"}
          onChange={handleChange}
          limit={constraints?.characterMax}
        />
      )}
      {type === "multiple choice" && (
        <RadioInput
          name={index}
          value={response}
          error={error}
          options={transformOptions(options)}
          onChange={handleChange}
        />
      )}
      {type === "checkboxes" && (
        <FormControl isInvalid={!!error}>
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
          <Error error={error} />
        </FormControl>
      )}
      {type === "dropdown" && (
        <SelectInput
          name={index}
          value={response}
          error={error}
          placeholder="Select"
          options={transformOptions(options)}
          onChange={handleChange}
        />
      )}
      {type === "number" && (
        <Flex>
          <TextInput
            type="number"
            name={index}
            value={response}
            error={error}
            placeholder={"Enter a number"}
            onChange={handleChange}
            roundedRight={0}
          />
          <ButtonGroup isAttached>
            <IconButton icon={<AddIcon />} rounded={0} onClick={handleIncrement} />
            <IconButton icon={<MinusIcon />} onClick={handleDecrement} />
          </ButtonGroup>
        </Flex>
      )}
      {type === "email" && (
        <EmailInput
          name={index}
          value={response}
          error={error}
          placeholder={"Enter an email"}
          onChange={handleChange}
        />
      )}
      {type === "phone" && (
        <PhoneInput
          name={index}
          value={response}
          error={error}
          placeholder={"Enter a phone number"}
          onChange={handleChange}
        />
      )}
      {type === "file" && ( //TODO view
        <FileInput
          name={index}
          error={error}
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
          error={error}
          placeholder={"Enter a link"}
          onChange={handleChange}
        />
      )}
      {type === "date" && (
        <DateInput
          name={index}
          value={response}
          error={error}
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
          error={error}
          onChange={handleChange}
        />
      )}
    </Box>
  );
}

export default Question;
