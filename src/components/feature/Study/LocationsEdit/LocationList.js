import { Grid } from "@chakra-ui/react";
import { SortableContainer } from "react-sortable-hoc";

import LocationItem from "./LocationItem";

export default SortableContainer(({ values, errors, updateLocation, deleteLocation }) => (
  <Grid gap="10px">
    {values.map((_, i) => (
      <LocationItem
        key={i}
        index={i}
        i={i}
        value={values[i]}
        error={errors[i]}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
      />
    ))}
  </Grid>
));
