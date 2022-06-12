import TabHeader from "../TabHeader";
import StudyCardLarge from "components/feature/Study/StudyCard/StudyCardLarge";
import { UserContext } from "context";
import { useContext } from "react";
import { auth } from "database/firebase";
import { Tooltip, Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "components";
import { useColor } from "hooks";
import { FaCheckCircle } from "react-icons/fa";

function DetailsView({ study }) {
  const user = useContext(UserContext);

  const isParticipantVerified = auth.currentUser.emailVerified;
  const hasParticipantEnrolled = user.enrolled.includes(study.id);

  const enrolledButtonColor = useColor("green.500", "green.400");
  const enrolledButtonBackground = useColor("green.100", "green.900");

  const enrollRedirectLink = `/study/${study.id}/screening`;

  return (
    <>
      <TabHeader heading="Details">
        <Tooltip
          label={
            !isParticipantVerified &&
            "You must verify your email before enrolling for studies"
          }
        >
          <Box>
            {hasParticipantEnrolled ? (
              <Flex
                align="center"
                gridGap="6px"
                paddingX="16px"
                color={enrolledButtonColor}
                background={enrolledButtonBackground}
                rounded="md"
                fontSize="14px"
                fontWeight="600"
                height="40px"
              >
                <FaCheckCircle />
                <Text marginBottom="2px">Enrolled</Text>
              </Flex>
            ) : (
              <Link to={enrollRedirectLink} isWrapper>
                <Button colorScheme="blue" isDisabled={!isParticipantVerified}>
                  Enroll
                </Button>
              </Link>
            )}
          </Box>
        </Tooltip>
      </TabHeader>
      <StudyCardLarge study={study} />
    </>
  );
}

export default DetailsView;
