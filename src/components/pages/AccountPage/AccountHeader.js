import { Grid, Heading, Text } from "@chakra-ui/react";

function AccountHeader({ title, description }) {
  return (
    <Grid gap="5px">
      <Heading size="md">{title}</Heading>
      <Text color="gray.500">{description}</Text>
    </Grid>
  );
}

export default AccountHeader;
