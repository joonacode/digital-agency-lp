import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useMemo } from "react";
import Container from "./Container";

const Footer = () => {
  const footerMenu = useMemo(
    () => [
      {
        title: "Resources",
        subMenu: ["Guides", "Blog", "Cuistomer Stories", "Glossery"],
      },
      {
        title: "Company",
        subMenu: ["About Us", "Careers", "Partners", "Contact Us"],
      },
      {
        title: "Social Media",
        subMenu: ["LinkedIn", "Facebook", "Instagram", "Twitter"],
      },
    ],
    []
  );
  return (
    <Box background={"#f6f6f6"} pt="20">
      <Container>
        <HStack mb="20" alignItems={"flex-start"}>
          <Box w={"35%"}>
            <Heading as="h5" mb="3" size={"md"}>
              Digital Agency
            </Heading>
            <Text>
              Building digital products,
              <br /> brands & experience
            </Text>
          </Box>
          <SimpleGrid flex="1" columns={3}>
            {footerMenu.map((item, i) => (
              <VStack key={i} alignItems={"flex-start"}>
                <Heading mb="3" as="h5" size={"md"}>
                  {item.title}
                </Heading>
                {item.subMenu.map((subitem, il) => (
                  <Link key={il} href="/">
                    <Text cursor={"pointer"}>{subitem}</Text>
                  </Link>
                ))}
              </VStack>
            ))}
          </SimpleGrid>
        </HStack>
        <Text py="6" textAlign={"center"}>
          &copy; Matheus. Todos os direitos reservados
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
