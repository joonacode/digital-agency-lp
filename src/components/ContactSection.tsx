import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const ContactSection = () => {
  return (
    <HStack
      mb={20}
      gap="20"
      background={"#f6f6f6"}
      borderRadius="2xl"
      py="10"
      px="20"
    >
      <Image src="/cs_section.svg" alt="contact" />
      <Box>
        <Heading as="h2" size={"2xl"} mb={5}>
          Be a part of the next big thing
        </Heading>
        <Text mb={8}>
          We work with Brans, Startups, to SMEs. Colaborate for more impact and
          growt
        </Text>
        <Button
          background={"#8EADD5"}
          color="white"
          w="170px"
          textTransform="uppercase"
          h="48px"
        >
          Contact Us
        </Button>
      </Box>
    </HStack>
  );
};

export default ContactSection;
