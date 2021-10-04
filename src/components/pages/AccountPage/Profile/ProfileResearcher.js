import { Grid } from "@chakra-ui/react";
import { TextInput, TextareaInput, PhoneInput } from "components";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";
import { useEffect, useState } from "react";

function ProfileResearcher({
  values,
  showButtons,
  handleCancel,
  handleUpdate,
  handleSetProfileAttribute,
}) {
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const normalizePhone = (value) => {
    const cleaned = value.replace(/\+1/, "").replace(/[^\d]/g, "");

    if (/(\d{3})(\d{3})(\d{1,4})/.exec(cleaned)) {
      return cleaned
        .replace(/(\d{3})(\d{3})(\d{1,4})/, "+1 ($1) $2-$3")
        .substr(0, 17);
    }

    if (/(\d{3})(\d{1,3})/.exec(cleaned)) {
      return cleaned.replace(/(\d{3})(\d{1,3})/, "+1 ($1) $2");
    }

    if (/(\d{1,3})/.exec(cleaned)) {
      return cleaned.replace(/(\d{1,3})/, "+1 ($1");
    }

    return "";
  };

  const handlePhone = (name, value) => {
    const phoneCleaned = value.replace(/\D/g, "").substr(1);
    setPhoneValue(normalizePhone(value));
    setPhoneError(
      phoneCleaned.length !== 0 && phoneCleaned.length !== 10
        ? "The phone number is invalid"
        : ""
    );
    handleSetProfileAttribute(name, phoneCleaned);
  };

  useEffect(() => {
    handlePhone("phone", normalizePhone(values.phone || ""));
  }, [values.phone]);

  return (
    <AccountWrapper
      showButtons={!phoneError && showButtons}
      handleCancel={handleCancel}
      handleUpdate={handleUpdate}
    >
      <AccountHeader
        title="Profile"
        description="The profile section contains personal information like your organization and background"
      />
      <Grid gap="25px">
        <PhoneInput
          label="Phone"
          name="phone"
          placeholder="Required for receiving text notifications"
          value={phoneValue}
          error={phoneError}
          onChange={handlePhone}
        />
        <TextInput
          label="Organization"
          name="organization"
          value={values.organization}
          onChange={handleSetProfileAttribute}
        />
        <TextareaInput
          label="Background"
          name="background"
          height="108px"
          value={values.background}
          onChange={handleSetProfileAttribute}
        />
      </Grid>
    </AccountWrapper>
  );
}

export default ProfileResearcher;
