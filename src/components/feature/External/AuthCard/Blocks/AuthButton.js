import { Button } from "@chakra-ui/react";

export const AuthButton = ({ children, loading, ...rest }) => (
  <Button
    size="lg"
    colorScheme="blue"
    type="submit"
    isLoading={loading}
    loadingText={children}
    boxShadow="xl"
    mt="20px"
    {...rest}
  >
    {children}
  </Button>
);
