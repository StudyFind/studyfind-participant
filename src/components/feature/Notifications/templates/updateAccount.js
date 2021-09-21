import { FaUser } from "react-icons/fa";

const updateAccount = () => {
  return {
    title: "Account Updated",
    body: "You updated your account information or settings. Click here to view your account.",
    link: "/account",
    color: "blue",
    icon: FaUser,
  };
};

export default updateAccount;
