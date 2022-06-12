import { SecondaryButton } from "components/simple/Buttons/SecondaryButton";
import { FaPlus, FaTrashAlt, FaUndo } from "react-icons/fa";

import { VStack, HStack } from "@chakra-ui/react";
import { EditorButton } from "components/simple/Buttons/EditorButton";

import ResourceList from "./ResourceList";

function ResourcesInputs({
  values,
  errors,
  hasChanged,
  notDefault,
  sortResources,
  createResource,
  updateResource,
  deleteResource,
  resetResources,
  clearResources,
}) {
  return (
    <VStack spacing="10px" align="stretch">
      <HStack>
        {hasChanged && notDefault && (
          <EditorButton icon={<FaUndo />} onClick={resetResources}>
            Undo Changes
          </EditorButton>
        )}
        {values.length && (
          <EditorButton
            icon={<FaTrashAlt />}
            onClick={clearResources}
            colorScheme="red"
          >
            Delete All
          </EditorButton>
        )}
      </HStack>
      <ResourceList
        values={values}
        errors={errors}
        updateResource={updateResource}
        deleteResource={deleteResource}
        onSortEnd={sortResources}
      />
      <SecondaryButton leftIcon={<FaPlus />} onClick={createResource}>
        Add Resource
      </SecondaryButton>
    </VStack>
  );
}

export default ResourcesInputs;
