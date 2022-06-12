import { useColor } from "hooks";
import {
  Heading,
  Text,
  Progress,
  Tag,
  Tooltip,
  Icon,
  Box,
  HStack,
} from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

function DescriptionAccessibilityScore({ score }) {
  const colorModeValues = {
    gray: useColor("gray.500", "gray.200"),
    red: useColor("red.500", "red.200"),
    green: useColor("green.500", "green.200"),
    yellow: useColor("yellow.500", "yellow.200"),
  };

  const isScoreInvalid = score === null || isNaN(score) || score === undefined;

  const getColor = () => {
    if (isScoreInvalid) return "gray";
    if (score <= 20) return "red";
    if (score >= 50) return "green";
    return "yellow";
  };

  const color = getColor();

  const scoreColor = useColor("white", "black");
  const scoreBackground = colorModeValues[color];
  const scoreBorderColor = useColor("gray.200", "gray.700");
  const progressBackground = useColor("gray.200", "gray.700");

  return (
    <Box
      borderColor={scoreBorderColor}
      borderWidth="1px"
      padding="16px 20px"
      rounded="md"
    >
      <HStack justify="space-between" align="center" wrap="wrap">
        <HStack>
          <Heading size="md">Description Accessibility Score</Heading>
          <HStack align="center">
            <Tag
              variant="solid"
              fontWeight="500"
              minWidth="45px"
              color={scoreColor}
              background={scoreBackground}
            >
              {isScoreInvalid ? "??" : score}%
            </Tag>
            <Tooltip label="This score is derived from the Flesch–Kincaid Readability Index. To improve your accessibility score, please use shorter sentences and words with fewer syllables.">
              <HStack height="100%" align="center">
                <Icon color="gray.500" as={FaInfoCircle} />
              </HStack>
            </Tooltip>
          </HStack>
        </HStack>
      </HStack>
      <Text color="gray.500" marginTop="4px" marginBottom="12px">
        Accessible study descriptions are shown to improve participant interest
        and enrollment rates
      </Text>
      <Progress
        value={score}
        marginTop="8px"
        background={progressBackground}
        colorScheme={color}
      />
    </Box>
  );
}

export default DescriptionAccessibilityScore;
