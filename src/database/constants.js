const errors = {
  // COMMON
  "auth/invalid-email": { email: "Email is invalid" },

  // SIGNUP
  "auth/email-already-in-use": { email: "This email already exists" },
  "auth/operation-not-allowed": { email: "This operation is not allowed" },
  "auth/weak-password": { password: "The password is not strong enough" },

  // SIGNIN
  "auth/user-disabled": { email: "Your account has been disabled" },
  "auth/user-not-found": { email: "Email does not exist" },
  "auth/user-not-verified": { email: "Email not verified" },
  "auth/too-many-requests": { password: "Too many unsuccessful attempts" },
  "auth/wrong-password": { password: "Password is incorrect" },

  // EMAIL VERIFICATION or PASSWORD RESET
  "auth/expired-action-code": {
    email: "The action link has expired",
    password: "The action link has expired",
  },
  "auth/invalid-action-code": {
    email: "The action link is invalid",
    password: "The action link is invalid",
  },
  "auth/argument-error": {
    password: "Invalid link",
  },
};

export { errors };
