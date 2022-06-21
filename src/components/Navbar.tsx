import { Box, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box py="10">
      <HStack>
        <Heading size="md" textTransform={"uppercase"}>
          Digital Agency
        </Heading>
        <Spacer />
        <HStack gap="5">
          <Link href="/">
            <Text>home</Text>
          </Link>
          <Link href="/">
            <Text>about</Text>
          </Link>
          <Link href="/">
            <Text>testimonials</Text>
          </Link>
          <Link href="/">
            <Text>contact</Text>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
