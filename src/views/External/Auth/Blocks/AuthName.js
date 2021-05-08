import React from "react";
import { Input } from "components";

function AuthName({ value, error, onChange }) {
  return (
    <Input
      size="lg"
      name="name"
      value={value}
      error={error}
      onChange={onChange}
      placeholder="Name"
    />
  );
}

export default AuthName;
