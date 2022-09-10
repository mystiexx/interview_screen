import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import Search from "../../assets/icons/Search";
import Officetable from "./components/Officetable";
import CreateBranch from "./components/CreateBranch";
import EditBranch from "./components/EditBranch";
import { IoAddOutline } from "react-icons/io5";

const Office = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [branch, setBranch] = useState({});

  const onClose = () => {
    setOpen(!open);
  };

  const close = () => {
    setEdit(!edit);
  };

  const onOpen = (data) => {
    setBranch(data);
    setEdit(!edit);
  };
  return (
    <Layout>
      <CreateBranch isOpen={open} onClose={onClose} />
      <EditBranch isOpen={edit} onClose={close} branch={branch} />
      <Container maxW="container.xl" pb="100px">
        <Box pt="24px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
          >
            <Text fontSize="32px" fontWeight="600">
              Office Branches
            </Text>

            <Button
              bg="#D54A39"
              leftIcon={<IoAddOutline color="#fff" />}
              borderRadius="6px"
              color="#fff"
              fontSize="12px"
              fontWeight="600"
              _hover={{ background: "none" }}
              onClick={() => setOpen(!open)}
            >
              Create Branch
            </Button>
          </Flex>

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
              <Input
                type="text"
                placeholder="Search"
                bg="#EBF0F5"
                border="none"
              />
              <InputRightElement children={<Search color="#DADADA" />} />
            </InputGroup>

            <Officetable onOpen={onOpen} />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Office;
