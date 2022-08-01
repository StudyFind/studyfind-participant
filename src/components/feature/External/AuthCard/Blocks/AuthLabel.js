const { Text } = require("@chakra-ui/react");


function AuthLabel({children}) {
    return (
        <Text fontWeight="600">{children}</Text>
    );
}

export default AuthLabel;