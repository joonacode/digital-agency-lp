import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Sponsor = () => {
  return (
    <Box mt={"32"} mb="10">
      <Text textAlign={"center"} fontWeight="light">
        Trusted By 4,000+ Companies
      </Text>
      <Box width={"90%"} mt="5" rounded="2xl" mx="auto" background={"#f6f6f6"}>
        <HStack gap="20px" px="8" py="5" justifyContent={"space-between"}>
          <Image width={"160px"} src="/spotify.png" alt="spotify" />
          <Image width={"160px"} src="/slack.png" alt="slack" />
          <Image width={"160px"} src="/dropbox.png" alt="dropbox" />
          <Image width={"120px"} src="/zoom.png" alt="zoom" />
        </HStack>
      </Box>
    </Box>
  );
};

export default Sponsor;
