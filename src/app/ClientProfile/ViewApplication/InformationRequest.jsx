import React, { useState } from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import RequestInformation from "./RequestInformation";

const InformationRequest = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box p="31px" bg="#fff" borderRadius="12px" mt="24px">
      <RequestInformation isOpen={open} onClose={() => setOpen(!open)} />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
      >
        <Text mb="25px" fontSize="18px" fontWeight="700">
          Information Request
        </Text>
        <Button
          bg="#D54A39"
          color="#fff"
          fontSize="12px"
          fontWeight="600"
          onClick={() => setOpen(!open)}
          _hover={{
            background: " #D54A39",
          }}
        >
          Request Information
        </Button>
      </Flex>
    </Box>
  );
};

export default InformationRequest;
