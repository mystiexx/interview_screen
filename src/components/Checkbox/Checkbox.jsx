import React from "react";
import { Box } from '@chakra-ui/react'
import Tick from "assets/icons/Tick";

const Checkbox = ({ select, handleSelect }) => {
  return (
    <Box
      w="24px"
      h="24px"
      borderRadius="6px"
      bg={select ? "#F18651" : "#ECF0F3"}
      role="checkbox"
      onClick={handleSelect}
      cursor="pointer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      {select && <Tick />}
    </Box>
  );
};

export default Checkbox;
