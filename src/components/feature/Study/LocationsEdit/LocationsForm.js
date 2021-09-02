import { useLocationsForm } from "hooks";

import LocationsInputs from "./LocationsInputs";

function LocationsForm({ study, onSubmit, Wrapper }) {
  const locationsForm = useLocationsForm(study, onSubmit);

  const title = "Locations";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";

  const handleSubmit = () => {
    const isValid = locationsForm.validate();

    if (isValid) {
      onSubmit(locationsForm.values);
    }
  };

  return (
    <Wrapper title={title} description={description} handleSubmit={handleSubmit}>
      <LocationsInputs
        values={locationsForm.values}
        errors={locationsForm.errors}
        hasChanged={locationsForm.hasChanged}
        notDefault={locationsForm.notDefault}
        createLocation={locationsForm.create}
        updateLocation={locationsForm.update}
        deleteLocation={locationsForm.delete}
        clearLocations={locationsForm.clear}
        resetLocations={locationsForm.reset}
        sortLocations={locationsForm.onSortEnd}
      />
    </Wrapper>
  );
}

export default LocationsForm;
