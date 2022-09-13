import React from "react";
import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { loanInfo } from "../data";

const LoanInformation = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box p="31px" bg="#fff" borderRadius="12px">
      <Text fontSize='18px' fontWeight='700'>Loan Information</Text>
      <Flex
        flexDirection={isNotSmallerScreen ? "row" : "column"}
        columns="2"
        mt="9px"
      >
        {loanInfo.map((data) => (
          <Box
            key={data.id}
            border="1px dashed #E3E6EF"
            borderRadius="6px"
            mr={isNotSmallerScreen ? "16px" : "none"}
            mt={isNotSmallerScreen ? null : "8px"}
            p="16px"
          >
            <Text fontSize="16px" fontWeight="700">
              {data.amount}
            </Text>
            <Text color="#888C9F" fontSize="12px" fontWeight="400" mt="12px">
              {data.title}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default LoanInformation;
