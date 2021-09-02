import { useState } from "react";
import { useColor, useDetectDevice } from "hooks";
import { validate } from "utils";

import { Heading, Button, Icon, VStack, Text, HStack } from "@chakra-ui/react";
import { Card, Form, TextInput } from "components";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";

import SectionWrapper from "../SectionWrapper";

function Mailing({ handleSubscribe /* `handleSubscribe` is a promise */ }) {
  const { isPhone } = useDetectDevice();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (_, value) => {
    setEmail(value);
    setError(validate.email(value));
  };

  const handleSubmit = () => {
    const err = validate.email(email);

    if (err) {
      setError(err);
      return;
    }

    setLoading(true);
    handleSubscribe(email)
      .then(() => setSuccess(true))
      .catch(() => setError("There was an error"))
      .finally(() => setLoading(false));
  };

  const cardBackgroundColor = useColor("gray.100", "gray.800");
  const inputBackgroundColor = useColor("white", "gray.900");

  return (
    <SectionWrapper>
      <Card
        width={isPhone ? "90%" : "50%"}
        minWidth={isPhone ? "0" : "400px"}
        padding={isPhone ? "30px" : "50px"}
        background={cardBackgroundColor}
      >
        {success ? (
          <VStack>
            <Icon as={FaCheckCircle} color="green.500" fontSize="48px" marginBottom="15px" />
            <Heading size="lg">Thank you for subscribing</Heading>
            <Text color="gray.500" fontWeight="500">
              We&apos;ll only send you the most imporant updates
            </Text>
          </VStack>
        ) : (
          <Form onSubmit={handleSubmit}>
            <VStack align="center" spacing="10px">
              <Heading
                size="lg"
                minWidth="250px"
                marginBottom="20px"
                textAlign="center"
                width={isPhone ? "90%" : "75%"}
              >
                Get feature updates in your inbox
              </Heading>
              <TextInput
                value={email}
                error={error}
                onChange={handleChange}
                placeholder="example@domain.com"
                background={inputBackgroundColor}
              />
              <Button
                type="submit"
                width="100%"
                colorScheme="blue"
                isLoading={loading}
                loadingText="Subscribing..."
              >
                Join Now
              </Button>
              <HStack fontSize="12px" align="center" spacing="6px">
                <Icon as={FaShieldAlt} color="green.500" />
                <Text color="gray.500">No Spam. We&apos;ll send relevant content only.</Text>
              </HStack>
            </VStack>
          </Form>
        )}
      </Card>
    </SectionWrapper>
  );
}

export default Mailing;
