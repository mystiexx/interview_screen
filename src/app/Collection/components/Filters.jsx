import React from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  Text,
  Select,
} from "@chakra-ui/react";
import Search from "../../../assets/icons/Search";

const Filters = () => {
  return (
    <Box
      mt="24px"
      bg="#fff"
      pl="30px"
      pt="24.71px"
      pr="30px"
      pb="48px"
      borderRadius="12px"
    >
      <Flex>
        <Box>
          <Text fontSize="13px" fontWeight="600" mb="9px">
            Search
          </Text>
          <InputGroup>
            <Input
              type="text"
              placeholder="Search"
              bg="#EBF0F5"
              border="none"
            />
            <InputRightElement children={<Search color="#DADADA" />} />
          </InputGroup>
        </Box>
        <Box ml="16px">
          <Text fontSize="13px" fontWeight="600" mb="9px">
            Type
          </Text>
          <Select
            borderRadius="9px"
            label="Select bank"
            bg="#EBF0F5"
            border="none"
            outline="none"
          >
            <option disabled selected>Overdue Payments</option>
          </Select>
        </Box>
        <Box ml="16px">
          <Text fontSize="13px" fontWeight="600" mb="9px">
            Overdue Date
          </Text>

          <Input type="date" bg="#EBF0F5" border="none" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Filters;
