import styled from "styled-components";
import { useColor } from "hooks";
import { Flex, Tag } from "@chakra-ui/react";

function ReminderWeekdays({ weekdays }) {
  const acronyms = ["M", "T", "W", "T", "F", "S", "S"];

  const tagColor = useColor("gray.500", "gray.400");
  const tagBackground = useColor("gray.200", "gray.700");
  const tagActiveColor = useColor("white", "white");
  const tagActiveBackground = useColor("blue.500", "blue.400");

  return (
    <Weekdays>
      {acronyms.map((value, i) => (
        <Tag
          key={i}
          color={weekdays[i] ? tagActiveColor : tagColor}
          background={weekdays[i] ? tagActiveBackground : tagBackground}
        >
          {value}
        </Tag>
      ))}
    </Weekdays>
  );
}

const Weekdays = styled(Flex)`
  & > span {
    border-radius: 0;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }

    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
`;

export default ReminderWeekdays;
