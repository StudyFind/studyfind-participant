import { useColor } from "hooks";
import { Button, Text } from "@chakra-ui/react";

function VerticalTabItem({ icon, name, selected, showBorder, onClick }) {
  const hover = useColor("gray.200", "gray.800");
  const active = useColor("gray.300", "gray.700");
  const borderColor = useColor("gray.200", "gray.700");

  return (
    <Button
      className="tab-item"
      background={selected ? "blue.500" : "transparent"}
      color={selected ? "white" : "gray.500"}
      _hover={{ bg: selected ? "blue.500" : hover }}
      _active={{ bg: selected ? "blue.500" : active }}
      textTransform="capitalize"
      justifyContent="flex-start"
      borderColor={selected ? "blue.500" : borderColor}
      borderWidth={showBorder && "1px"}
      leftIcon={icon}
      onClick={onClick}
    >
      <Text marginLeft="4px">{name}</Text>
    </Button>
  );
}

export default VerticalTabItem;
