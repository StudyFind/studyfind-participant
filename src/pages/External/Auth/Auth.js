import { Box, Flex, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import { Link } from "components";
import AuthCard from "components/feature/External/AuthCard/AuthCard";
import AuthFeatures from "components/feature/External/AuthCard/AuthFeatures";
import HeaderLogo from "components/feature/External/HomeSections/Header/HeaderLogo";
import { useColor, useDetectDevice } from "hooks";
import { AuthProvider } from "../../../context/AuthContext";

function Auth() {
  const { isPhone } = useDetectDevice();
  const headingStyles = isPhone ? { size: "md" } : { fontSize: "25px" };
  const background = useColor("gray.100", "gray.800");

  return (
    <Flex direction="column">
      <Grid
        templateRows={isPhone && "repeat(2, fr)"}
        templateColumns={!isPhone && "repeat(6, 1fr)"}
      >
        <GridItem
          rowStart={isPhone && 1}
          rowEnd={isPhone && 2}
          minHeight="100vh"
          maxHeight="100%"
          width="100%"
          bg={background}
          colSpan={!isPhone && 2}
        >
          <AuthFeatures />
        </GridItem>
        <GridItem
          rowStart={isPhone && 0}
          rowEnd={isPhone && 1}
          colSpan={!isPhone && 4}
        >
          <Box position="relative" height="100%">
            {/* TODO: Temp link, link this to home page */}
            <Link to="/auth">
              <Stack position="absolute" left="30px" top="20px" direction="row">
                <HeaderLogo />
                <Heading color={"blue.500"}{...headingStyles}>Participant</Heading>
              </Stack>
            </Link>
            <AuthProvider>
              <Flex justify="center" align="center" height="100%">
                <AuthCard />
              </Flex>
            </AuthProvider>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Auth;
