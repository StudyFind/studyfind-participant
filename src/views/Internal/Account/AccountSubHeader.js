import { Grid, Heading, Text } from "@chakra-ui/react";

function AccountSubHeader({ subtitle, subdescription }) {
  return (
    <Grid gap="3px">
      <Heading size="sm" mb="0">
        {subtitle}
      </Heading>
      <Text color="gray.500" fontSize="14px">
        {subdescription}
      </Text>
    </Grid>
  );
}

export default AccountSubHeader;
