import { SecondaryButton } from "components/simple/Buttons/SecondaryButton";
import { FaPlus, FaTrashAlt, FaUndo } from "react-icons/fa";

import { VStack, HStack } from "@chakra-ui/react";
import { EditorButton } from "components";

import LocationList from "./LocationList";

function LocationsInputs({
  values,
  errors,
  hasChanged,
  notDefault,
  createLocation,
  updateLocation,
  deleteLocation,
  clearLocations,
  resetLocations,
  sortLocations,
}) {
  return (
    <VStack spacing="10px" align="stretch">
      <HStack>
        {hasChanged && notDefault && (
          <EditorButton icon={<FaUndo />} onClick={resetLocations}>
            Undo Changes
          </EditorButton>
        )}
        {values.length && (
          <EditorButton icon={<FaTrashAlt />} onClick={clearLocations} colorScheme="red">
            Delete All
          </EditorButton>
        )}
      </HStack>
      <LocationList
        values={values}
        errors={errors}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
        onSortEnd={sortLocations}
      />
      <SecondaryButton leftIcon={<FaPlus />} onClick={createLocation}>
        Add Location
      </SecondaryButton>
    </VStack>
  );
}

export default LocationsInputs;
