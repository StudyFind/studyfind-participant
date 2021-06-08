import { Divider } from "@chakra-ui/react";

import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

function Security() {
  return (
    <>
      <ChangePassword />
      <Divider />
      <DeleteAccount />
    </>
  );
}

export default Security;
