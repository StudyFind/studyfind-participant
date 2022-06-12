import { compute } from "utils";
import { useDetectDevice } from "hooks";

import { Heading, SimpleGrid, HStack, VStack } from "@chakra-ui/react";
import {
  EditorButton,
  Card,
  ChoiceInput,
  TagInput,
  NumberInput,
  CheckboxInput,
  TextareaInput,
} from "components";
import { FaEraser, FaUndo } from "react-icons/fa";

import DescriptionAccessibilityScore from "./DescriptionAccessibilityScore";

function DetailsInputs({
  values,
  errors,
  hasChanged,
  notDefault,
  handleChange,
  handleReset,
  handleClear,
}) {
  const { isPhone } = useDetectDevice();

  return (
    <VStack spacing="20px" align="stretch">
      <HStack>
        {handleReset && hasChanged && notDefault && (
          <EditorButton icon={<FaUndo />} onClick={handleReset}>
            Undo Changes
          </EditorButton>
        )}
        {handleClear && (values.title || values.description) && (
          <EditorButton
            icon={<FaEraser />}
            onClick={handleClear}
            colorScheme="purple"
          >
            Reset Values
          </EditorButton>
        )}
      </HStack>
      <SimpleGrid columns={isPhone ? 1 : 2} spacing="25px">
        <Card padding="25px">
          <Heading size="lg" marginBottom="20px" color="blue.400">
            General
          </Heading>
          <VStack spacing="20px" align="stretch" marginTop="10px">
            <ChoiceInput
              name="type"
              label="Study Type"
              value={values.type}
              error={errors.type}
              options={[
                { label: "Observational", value: "Observational" },
                { label: "Interventional", value: "Interventional" },
              ]}
              onChange={handleChange}
              marginBottom="10px"
            />

            <TextareaInput
              label="Study Title"
              name="title"
              value={values.title}
              error={errors.title}
              limit={100}
              height="100px"
              onChange={handleChange}
            />

            <TextareaInput
              label="Study Description"
              name="description"
              value={values.description}
              error={errors.description}
              limit={500}
              height="250px"
              onChange={handleChange}
            />
            <DescriptionAccessibilityScore
              score={compute.readabilityIndex(values.description)}
            />
          </VStack>
        </Card>

        <Card padding="25px">
          <Heading size="lg" marginBottom="20px" color="blue.400">
            Eligibility
          </Heading>
          <VStack spacing="20px" align="stretch" marginTop="10px">
            <ChoiceInput
              name="sex"
              label="Biological Sex"
              value={values.sex}
              error={errors.sex}
              options={[
                { label: "All", value: "All" },
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
              onChange={handleChange}
            />

            <HStack spacing="20px">
              <NumberInput
                min={0}
                max={parseInt(values.maxAge) - 1}
                step={1}
                precision={0}
                name="minAge"
                label="Minimum Age"
                value={values.minAge}
                error={errors.minAge}
                onChange={handleChange}
              />
              <NumberInput
                min={parseInt(values.minAge) + 1}
                max={100}
                step={1}
                precision={0}
                name="maxAge"
                label="Maximum Age"
                value={values.maxAge}
                error={errors.maxAge}
                onChange={handleChange}
              />
            </HStack>

            <TagInput
              name="conditions"
              label="Medical Conditions"
              value={values.conditions}
              error={errors.conditions}
              onChange={handleChange}
              buttonText="Add Condition"
            />

            <CheckboxInput
              name="acceptsHealthyVolunteers"
              label="Accepts Healthy Volunteers"
              details="Check this box if your research study accepts healthy volunteers"
              value={values.acceptsHealthyVolunteers}
              onChange={handleChange}
            />
          </VStack>
        </Card>
      </SimpleGrid>
    </VStack>
  );
}

export default DetailsInputs;
