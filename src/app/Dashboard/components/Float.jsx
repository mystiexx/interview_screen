import React from "react";
import { Box } from "@chakra-ui/react";
import Drop from "../../../assets/icons/Drop";
import FloatSettings from "../../../assets/icons/FloatSettings";
import Telegram from "../../../assets/icons/Telegram";
import Chat from "../../../assets/icons/Chat";

const Float = () => {
  return (
    <div>
      <Box
        bg="#fff"
        position="fixed"
        right="0"
        top="30%"
        pt="10px"
        pb="10px"
        pl="7px"
        pr="9px"
       
        boxShadow={"-25px 0px 30px rgba(0, 0, 0, 0.02);"}
      >
        <Box
          bg="#F4F4F8"
          borderRadius="6px"
          display="grid"
          placeItems="center"
          p="6px"
          mb="10px"
          cursor="pointer"
        >
          <Drop />
        </Box>
        <Box
          bg="#F4F4F8"
          borderRadius="6px"
          display="grid"
          placeItems="center"
          p="6px"
          mb="10px"
          cursor="pointer"
        >
          <FloatSettings />
        </Box>
        <Box
          bg="#F4F4F8"
          borderRadius="6px"
          display="grid"
          placeItems="center"
          p="6px"
          mb="10px"
          cursor="pointer"
        >
          <Telegram />
        </Box>
        <Box
          bg="#F4F4F8"
          borderRadius="6px"
          display="grid"
          placeItems="center"
          p="6px"
          cursor="pointer"
        >
          <Chat />
        </Box>
      </Box>
    </div>
  );
};

export default Float;
