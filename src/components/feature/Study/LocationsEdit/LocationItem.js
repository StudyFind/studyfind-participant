import { Grid } from "@chakra-ui/react";
import { TextInput, ActionButton } from "components";
import { FaTrashAlt } from "react-icons/fa";
import { SortableElement } from "react-sortable-hoc";

import DragHandle from "./DragHandle";

export default SortableElement(
  ({ i, value, error, updateLocation, deleteLocation }) => (
    <Grid templateColumns="1fr 24fr 1fr" gridGap="10px" width="100%">
      <DragHandle />
      <TextInput
        placeholder="Location Address"
        name="address"
        value={value.address}
        error={error.address}
        onChange={(n, v) => updateLocation(i, n, v)}
      />
      <ActionButton
        colorScheme="red"
        size="md"
        hint="Delete Question"
        icon={<FaTrashAlt />}
        onClick={() => deleteLocation(i)}
      />
    </Grid>
  )
);
