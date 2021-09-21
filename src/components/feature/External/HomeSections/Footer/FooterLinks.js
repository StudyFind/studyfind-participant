import { useColor } from "hooks";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "components";

function FooterLinks({ links }) {
  const color = useColor("gray.500", "gray.200");

  return (
    <ButtonGroup variant="ghost" color="gray.600">
      <Link to={links.linkedin}>
        <IconButton icon={<FaLinkedin />} color={color} fontSize="20px" />
      </Link>
      <Link to={links.instagram}>
        <IconButton icon={<FaInstagram />} color={color} fontSize="20px" />
      </Link>
      <Link to={links.facebook}>
        <IconButton icon={<FaFacebookSquare />} color={color} fontSize="20px" />
      </Link>
    </ButtonGroup>
  );
}

export default FooterLinks;
