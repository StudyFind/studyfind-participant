import LocationsEmpty from "components/feature/Study/LocationsView/LocationsEmpty";
import LocationsList from "components/feature/Study/LocationsView/LocationsList";
import TabHeader from "../TabHeader";

function LocationsView({ study }) {
  if (!study?.locations?.length) {
    return <LocationsEmpty />;
  }

  return (
    <>
      <TabHeader heading="Locations"></TabHeader>
      <LocationsList locations={study.locations} />
    </>
  );
}

export default LocationsView;
