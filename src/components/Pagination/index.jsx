import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Pagination = () => {
  return (
    <div>
      <Flex
        justifyContent="flex-end"
        alignContent={"center"}
        alignItems="center"
        mt="69px"
      >
        <Box>
          <Flex alignItems="center" alignContent="center">
            <Text color="#D6D6E0" fontSize="13px" fontWeight="600">
              1-50 of 235
            </Text>
            <Box
              bg="#F3F6F9"
              borderRadius="6px"
              display="grid"
              placeItems="center"
              w="25px"
              h="25px"
              ml="7px"
              color="#D6D6E0"
              fontSize="14px"
            >
              <Text> {"<"} </Text>
            </Box>
            <Box
              bg="#F3F6F9"
              borderRadius="6px"
              display="grid"
              placeItems="center"
              w="25px"
              h="25px"
              ml="7px"
              color="#D6D6E0"
              fontSize="14px"
            >
              <Text> {">"} </Text>
            </Box>
            <Box
              bg="#F3F6F9"
              borderRadius="6px"
              display="grid"
              placeItems="center"
              w="25px"
              h="25px"
              ml="7px"
              color="#D6D6E0"
              fontSize="14px"
            >
              <Text> {"..."} </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Pagination;
