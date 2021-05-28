import { functions } from "database/firebase";

const generateFunction = (code) => {
  return functions.httpsCallable(code);
};

export const setParticipantClaim = generateFunction("setParticipantClaim");
