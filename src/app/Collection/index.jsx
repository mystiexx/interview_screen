import React from "react";
import { Box, Text, Button, Container, Flex } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import Filters from "./components/Filters";
import Export from "../../assets/icons/Export";
import BranchTable from "./components/BranchTable";

const Collection = () => {
  return (
    <Layout>
      <Container maxW="container.xl" pb="100px">
        <Box pt="24px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
          >
            <Text fontSize="32px" fontWeight="600">
              All Collections
            </Text>

            <Button
              leftIcon={<Export />}
              bg="#FFEAE1CF"
              borderRadius="6px"
              color="#F18651"
              fontSize="12px"
              fontWeight="600"
              _hover={{ background: "none" }}
            >
              Export
            </Button>
          </Flex>

          <Filters />

          <BranchTable />
        </Box>
      </Container>
    </Layout>
  );
};

export default Collection;
