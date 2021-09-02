import { Grid } from "@chakra-ui/react";
import { SortableContainer } from "react-sortable-hoc";

import ResourceItem from "./ResourceItem";

export default SortableContainer(({ values, errors, updateResource, deleteResource }) => (
  <Grid gap="10px">
    {values.map((_, i) => (
      <ResourceItem
        key={i}
        index={i}
        i={i}
        value={values[i]}
        error={errors[i]}
        updateResource={updateResource}
        deleteResource={deleteResource}
      />
    ))}
  </Grid>
));
