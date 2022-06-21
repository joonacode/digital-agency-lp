import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  desc: string;
  image: string;
  imagePosition: "right" | "left";
};

const SectionGrid: React.FC<Props> = ({
  imagePosition,
  title,
  desc,
  image,
}) => {
  return (
    <HStack my="20">
      {imagePosition === "left" && (
        <Box width={"50%"}>
          <Image src={image} mr="auto" alt={title} />
        </Box>
      )}
      <Box w="40%">
        <Heading as="h2" size={"2xl"} mb={6}>
          {title}
        </Heading>
        <Text mb={8}>{desc}</Text>
        <Image src="/arrow_right.svg" alt="detail" cursor={"pointer"} />
      </Box>
      {imagePosition === "right" && (
        <Box width={"50%"}>
          <Image src={image} ml="auto" alt={title} />
        </Box>
      )}
    </HStack>
  );
};

export default SectionGrid;
