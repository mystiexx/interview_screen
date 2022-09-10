import React, { useState } from "react";
import { Box, Text, Button, Container, Flex } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import Filters from "./components/Filters";
import TableContent from "./components/TableContent";
import { IoAddOutline } from "react-icons/io5";
import AddBankDetails from "./components/AddBankDetails";

const CollectionBank = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(!open);
  };
  return (
    <Layout>
      <AddBankDetails isOpen={open} onClose={onClose} />
      <Container maxW="container.xl" pb="100px">
        <Box pt="24px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
          >
            <Text fontSize="32px" fontWeight="600">
              Collection Bank
            </Text>

            <Button
              onClick={() => setOpen(!open)}
              leftIcon={<IoAddOutline color="#fff" />}
              bg="#D54A39"
              borderRadius="6px"
              color="#fff"
              fontSize="12px"
              fontWeight="600"
              _hover={{ background: "#D54A39" }}
            >
              Add Bank Details
            </Button>
          </Flex>

          <Filters />

          <TableContent />
        </Box>
      </Container>
    </Layout>
  );
};

export default CollectionBank;
