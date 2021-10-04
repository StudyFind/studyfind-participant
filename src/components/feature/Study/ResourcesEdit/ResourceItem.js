import { Grid } from "@chakra-ui/react";
import { ActionButton, TextInput, LinkInput } from "components";
import { FaTrashAlt } from "react-icons/fa";
import { SortableElement } from "react-sortable-hoc";

import DragHandle from "./DragHandle";

export default SortableElement(
  ({ i, value, error, updateResource, deleteResource }) => (
    <Grid templateColumns="1fr 8fr 16fr 1fr" gridGap="10px" width="100%">
      <DragHandle />
      <TextInput
        placeholder="Resource Name"
        name="name"
        value={value.name}
        error={error.name}
        onChange={(n, v) => updateResource(i, n, v)}
      />
      <LinkInput
        placeholder="Resource Link"
        name="link"
        value={value.link}
        error={error.link}
        onChange={(n, v) => updateResource(i, n, v)}
      />
      <ActionButton
        colorScheme="red"
        size="md"
        hint="Delete Resource"
        icon={<FaTrashAlt />}
        onClick={() => deleteResource(i)}
      />
    </Grid>
  )
);
