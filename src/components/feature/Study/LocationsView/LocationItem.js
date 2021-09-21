import { ListItem, Text } from "@chakra-ui/react";
import { Link } from "components";

function LocationItem({ location }) {
  const initial = "https://www.google.com/maps?saddr=My+Location&daddr=";
  const address = location.address;
  const cleaned = address.trim().split(" ").join("+");
  const googleMapsLink = initial + cleaned;

  return (
    <ListItem marginY="4px">
      <Link to={googleMapsLink}>
        <Text color="blue.500">{address}</Text>
      </Link>
    </ListItem>
  );
}

export default LocationItem;
