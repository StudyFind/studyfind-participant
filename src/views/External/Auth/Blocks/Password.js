import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "components";

function Password({ name, placeholder, value, error, onChange }) {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow((show) => !show);

  return (
    <Input
      size="lg"
      name={name || "password"}
      value={value}
      error={error}
      onChange={onChange}
      placeholder={placeholder || "Password"}
      type={show ? "text" : "password"}
      rightWidth="5rem"
      right={
        <Button size="sm" onClick={handleToggle}>
          {show ? "Hide" : "Show"}
        </Button>
      }
    />
  );
}

export default Password;
