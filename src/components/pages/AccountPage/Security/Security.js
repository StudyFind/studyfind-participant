import { Divider } from "@chakra-ui/react";
import AccountWrapper from "../AccountWrapper";

import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

function Security({ handleChangePassword, handleDeleteAccount }) {
  return (
    <AccountWrapper showButtons={false}>
      <ChangePassword handleChangePassword={handleChangePassword} />
      <Divider />
      <DeleteAccount handleDeleteAccount={handleDeleteAccount} />
    </AccountWrapper>
  );
}

export default Security;
