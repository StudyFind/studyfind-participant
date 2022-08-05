import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useColor, useDetectDevice } from "hooks";

import {
  FcSurvey,
  FcCalendar,
  FcCollaboration,
  FcVideoCall,
  FcOvertime,
  FcAbout,
} from "react-icons/fc";
import Feature from "./Blocks/Feature";

function AuthFeatures() {
  const features = [
    {
      icon: <FcSurvey />,
      title: "Screening Survey",
      description:
        "A brief survey that will help you automatically know what studies you may qualify for",
    },
    {
      icon: <FcOvertime />,
      title: "Reminders",
      description:
        "Our reminders feature will keep you on track with study requirements",
    },
    {
      icon: <FcCollaboration />,
      title: "Secure Messaging",
      description:
        "We value your privacy, so rest assured our messaging feature is HIPAA compliant",
    },
    {
      icon: <FcVideoCall />,
      title: "Meetings",
      description:
        "Get on calls with researchers at different milestones in the participation process",
    },
    {
      icon: <FcCalendar />,
      title: "Calendar",
      description:
        "The calendar feature allows you to view all your scheduled meetings in a single place",
    },
    {
      icon: <FcAbout />,
      title: "Notifications",
      description:
        "The notification feature keeps you updated about your status in the recruitment process",
    },
  ];

  const background = useColor("gray.100", "gray.900");

  const { isPhone } = useDetectDevice();

  return (

      <Flex
        direction="column"
        justify="space-around"
        gap="30px"
        height="100%"
        width="100%"
        paddingY={isPhone? '60px' : '40px'}
        paddingX="30px"
        bg={background}
      >
        <Heading w={"100%"} textAlign={"center"} fontSize={"3xl"} color={"blue.500"}>Current Features</Heading>
        {features.map((feature, i) => (
          <Feature
            key={i}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Flex>

  );
}

export default AuthFeatures;
