import React from "react";
import Layout from "Layout/Layout";
import { Box, Text, Flex, Button, Container, Input,
  InputGroup,
  InputRightElement, } from "@chakra-ui/react";
import Export from "assets/icons/Export";
import MainTable from "./MainTable";
import Search from "assets/icons/Search";

const IncompleteRecords = () => {
  return (
    <Layout>
      <Container maxW="container.xl" pb="100px" pt='24px'>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize='32px' fontWeight='600'>Incomplete Records</Text>
          <Button
            leftIcon={<Export />}
            color='#F18651'
            bg="#FFEAE1CF"
            _hover={{
              background: "#FFEAE1CF",
            }}
          >
            Export
          </Button>
        </Flex>
        <Box mt="24px">
          <Box pt="33px" p="30px" borderRadius="12px" bg="#fff">
            <Text>Search</Text>
            <InputGroup
                  bg="#EBF0F5"
                  border="none"
                  w="220px"
                  borderRadius="9px"
                  mt='9px'
                >
                  <Input type="text" placeholder="Search" border="none" />
                  <InputRightElement children={<Search color="#DADADA" />} />
                </InputGroup>
          </Box>
          <MainTable/>
        </Box>
      </Container>
    </Layout>
  );
};

export default IncompleteRecords;
