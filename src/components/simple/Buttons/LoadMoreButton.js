import { useColor } from "hooks";
import { Text, Button } from "@chakra-ui/react";

export const LoadMoreButton = ({ fetchedAll, fetchedAllText, ...rest }) => {
  const borderColor = useColor("gray.200", "gray.700");
  const backgroundColor = useColor("white", "gray.900");
  const hoverBackgroundColor = useColor("gray.100", "gray.800");
  const activeBackgroundColor = useColor("gray.200", "gray.700");

  if (fetchedAll) {
    return <Text color="gray.400">{fetchedAllText}</Text>;
  }

  return (
    <Button
      background={backgroundColor}
      borderColor={borderColor}
      _hover={{ background: hoverBackgroundColor }}
      _active={{ background: activeBackgroundColor }}
      borderWidth="1px"
      color="gray.500"
      variant="outline"
      size="sm"
      {...rest}
    >
      Load more
    </Button>
  );
};
