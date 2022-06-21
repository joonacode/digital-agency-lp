import { Box, Grid, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const TestimoniSection = () => {
  return (
    <Box mt={32} mb={32}>
      <Text textAlign={"center"} textTransform="uppercase">
        Testimonial
      </Text>
      <Heading textAlign={"center"} as="h2" size={"2xl"} mt="5">
        Read What Other <br />
        Have To Say
      </Heading>
      <SimpleGrid columns={3} spacing={5} mt={10}>
        <TestimoniCard
          name="Andrew Rathore"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
          image="/avatar1.svg"
        />
        <TestimoniCard
          name="Vera Duncan"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
          image="/avatar2.svg"
        />
        <TestimoniCard
          name="Mark Smith"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. "
          image="/avatar3.svg"
        />
      </SimpleGrid>
    </Box>
  );
};

type Props = {
  name: string;
  review: string;
  image: string;
};

const TestimoniCard: React.FC<Props> = ({ name, review, image }) => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      flexDir="column"
      background={"#f6f6f6"}
      borderRadius="xl"
      px="10"
      py="8"
    >
      <Box
        overflow={"hidden"}
        h="130px"
        w="130px"
        borderRadius={"full"}
        background="#f6f6f680"
        border="1px solid #ddd"
      >
        <Image src={image} alt={name} />
      </Box>
      <Text mt={5} fontSize="xl" textAlign={"center"} mb={3}>
        {name}
      </Text>
      <Text fontWeight={300} textAlign={"center"}>
        {review}
      </Text>
    </Box>
  );
};

export default TestimoniSection;
