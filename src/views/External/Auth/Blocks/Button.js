import React from "react";
import { Button } from "components";

function AuthButton({ children, loading, ...rest }) {
  return (
    <Button
      size="lg"
      colorScheme="blue"
      type="submit"
      isLoading={loading}
      loadingText={children}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default AuthButton;
