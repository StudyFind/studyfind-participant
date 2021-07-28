import { useState, useEffect } from "react";
import { storage } from "database/firebase";
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
import FileCard from "./FileCard";
import { datetime } from "functions";
import { Error } from "components/Inputs/helpers";

function Question({ index, question, response, error, disable, handleChange, handleFiles }) {
  const { prompt, type, options, constraints } = question;
  const [viewFile, setViewFile] = useState({ name: "", link: "", date: "" });

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
    handleFiles(index, name, file, false);
  };

  const getFile = async () => {
    const file = storage.ref(response);
    const meta = await file.getMetadata();
    const url = await file.getDownloadURL();
    setViewFile({
      name: file.name,
      link: url,
      date: datetime.getFriendlyDate(meta.timeCreated),
    });
  };

  const handleDeleteFile = () => {
    handleFiles(index, response, null, true);
    handleChange(index, "");
    setViewFile({ name: "", link: "", date: "" });
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
    if (disable) return;
    if (type === "checkboxes" && response === "") {
      const values = Array(options.length);
      handleChange(index, { values: values.fill(false) });
    } else if (type === "file" && response) {
      getFile();
    }
  }, [response]);

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
          isDisabled={disable}
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
          isDisabled={disable}
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
                isDisabled={disable}
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
          isDisabled={disable}
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
            isDisabled={disable}
            placeholder={"Enter a number"}
            onChange={handleChange}
            roundedRight={0}
          />
          <ButtonGroup isAttached>
            <IconButton
              icon={<AddIcon />}
              rounded={0}
              isDisabled={disable}
              onClick={handleIncrement}
            />
            <IconButton icon={<MinusIcon />} isDisabled={disable} onClick={handleDecrement} />
          </ButtonGroup>
        </Flex>
      )}
      {type === "email" && (
        <EmailInput
          name={index}
          value={response}
          error={error}
          isDisabled={disable}
          placeholder={"Enter an email"}
          onChange={handleChange}
        />
      )}
      {type === "phone" && (
        <PhoneInput
          name={index}
          value={response}
          error={error}
          isDisabled={disable}
          placeholder={"Enter a phone number"}
          onChange={handleChange}
        />
      )}
      {type === "file" &&
        (response ? (
          <FileCard file={viewFile} handleDelete={handleDeleteFile} />
        ) : (
          <>
            <FileInput
              name={index}
              error={error}
              isDisabled={disable}
              onChange={handleSelectFile}
              accept={`${constraints?.pdfAllowed ? "application/pdf, " : ""}${
                constraints?.docAllowed ? "application/msword, " : ""
              }${constraints?.jpgAllowed ? "image/jpeg, " : ""}${
                constraints?.pngAllowed ? "image/png, " : ""
              }`}
            />
            <Text fontSize="xs" as="i" color="gray.500">
              {`Allowed types: ${constraints?.pdfAllowed ? "PDF, " : ""}${
                constraints?.docAllowed ? "DOC, " : ""
              }${constraints?.jpgAllowed ? "JPG, " : ""}${
                constraints?.pngAllowed ? "PNG, " : ""
              }`.slice(0, -2)}
            </Text>
          </>
        ))}
      {type === "link" && (
        <LinkInput
          name={index}
          value={response}
          error={error}
          isDisabled={disable}
          placeholder={"Enter a link"}
          onChange={handleChange}
        />
      )}
      {type === "date" && (
        <DateInput
          name={index}
          value={response}
          error={error}
          isDisabled={disable}
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
          isDisabled={disable}
          onChange={handleChange}
        />
      )}
      <Stack mt="5px" spacing="xs">
        {constraints?.characterMin && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Minimum characters: ${constraints?.characterMin}`}
          </Text>
        )}
        {constraints?.characterMax && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Max characters: ${constraints?.characterMax}`}
          </Text>
        )}
        {constraints?.dateMin && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Earliest: ${constraints?.dateMin}`}
          </Text>
        )}
        {constraints?.dateMax && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Latest: ${constraints?.dateMax}`}
          </Text>
        )}
        {constraints?.timeMin && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Earliest: ${constraints?.timeMin}`}
          </Text>
        )}
        {constraints?.timeMax && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Latest: ${constraints?.timeMax}`}
          </Text>
        )}
        {constraints?.timeInterval && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Interval (minutes): ${constraints?.timeInterval}`}
          </Text>
        )}
        {constraints?.numberMin && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Min: ${constraints?.numberMin}`}
          </Text>
        )}
        {constraints?.numberMax && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Max: ${constraints?.numberMax}`}
          </Text>
        )}
        {constraints?.numberInterval && (
          <Text fontSize="xs" as="i" color="gray.500">
            {`Interval: ${constraints?.numberInterval}`}
          </Text>
        )}
      </Stack>
    </Box>
  );
}

export default Question;
