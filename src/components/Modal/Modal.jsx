import React from "react";
import { Box } from "@chakra-ui/react";

const Modal = ({ Open, children }) => {
  return (
    <div>
      <Box
        position="fixed"
        w="100%"
        h="100vh"
        display="grid"
        zIndex="500"
        top="0"
        transition="0.3s ease-in-out"
        opacity={Open ? "100%" : "0"}
        left={Open ? "0" : "-100%"}
      >
        {children}
      </Box>
    </div>
  );
};

export default Modal;
