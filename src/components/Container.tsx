import { Box, StyleProps } from "@chakra-ui/react";
import React from "react";

interface Props extends StyleProps {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box maxW={"1280px"} mx="auto" px="10" {...rest}>
      {children}
    </Box>
  );
};

export default Container;
