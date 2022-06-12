import { FaMagic } from "react-icons/fa";

const createAccount = ({ side, meta }) => {
  const title = "Welcome to StudyFind";
  const color = "purple";
  const icon = FaMagic;

  const splitName = meta?.name?.split(" ");
  const firstName = splitName && splitName[0];

  const body =
    side === "researcher"
      ? `We're glad to have you on board, ${firstName}. Click here to create your first study!`
      : `We're glad to have you on board, ${firstName}. Click here to find research studies!`;

  const link = side === "researcher" ? "/create" : "/find-studies";

  return { link, icon, color, title, body };
};

export default createAccount;
