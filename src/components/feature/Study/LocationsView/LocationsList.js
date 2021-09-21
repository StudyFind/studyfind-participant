import { OrderedList } from "@chakra-ui/react";
import LocationItem from "./LocationItem";

function LocationsList({ locations }) {
  return (
    <>
      <OrderedList>
        {locations.map((location, i) => (
          <LocationItem key={i} location={location} />
        ))}
      </OrderedList>
    </>
  );
}

export default LocationsList;
