import React from "react";
import { Box } from "@chakra-ui/react";

const Badge = ({ children, bgColor, color }) => {
  return (
    <div>
      <Box
        bg={bgColor}
        textTransform="capitalize"
        textAlign={"center"}
        color={color}
        pt="6px"
        pb="7px"
        fontSize="11px"
        fontWeight="500"
        borderRadius={"6px"}
      >
        {children}
      </Box>
    </div>
  );
};

export default Badge;
