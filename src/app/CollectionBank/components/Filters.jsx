import React from 'react'
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
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
      <InputGroup w="166px">
        <Input type="text" placeholder="Search" bg="#EBF0F5" border="none" />
        <InputRightElement children={<Search color="#DADADA" />} />
      </InputGroup>
    </Box>
  )
}

export default Filters
