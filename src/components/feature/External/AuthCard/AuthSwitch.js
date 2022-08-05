import { useColor } from "hooks";
import { Flex, Text } from "@chakra-ui/react";

function AuthSwitch({ tab, setTab }) {
  const tabs = [
    { desc: "Have an account?", value: "login", label: "Sign in" },
    { desc: "No account?", value: "signup", label: "Sign up" },
  ];

  const linkColor = useColor("blue.500", "blue.400");

  const currentTab = tab === "signup" ? tabs[0] : tabs[1];

  return (
    <Flex direction="column">
      <Text color="gray.500" fontSize="sm">
        {currentTab.desc}
      </Text>
      <Text
        fontSize="sm"
        onClick={() => {
          setTab(currentTab.value);
        }}
        color={linkColor}
      >
        {currentTab.label}
      </Text>
    </Flex>
  );
}

export default AuthSwitch;
