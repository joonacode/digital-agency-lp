import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <HStack mt={20}>
      <Box w="55%">
        <Heading mb="5" as="h1" size={"4xl"}>
          Bulding Digital Products, Brands & Experience
        </Heading>
        <Text mb="8">
          Digital Agency is your online team mangement tool that easy and prompt
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
      <Box flex="1" display={"flex"} justifyContent="center">
        <Image src="/hero_section.svg" alt="Hero" />
      </Box>
    </HStack>
  );
};

export default Hero;
