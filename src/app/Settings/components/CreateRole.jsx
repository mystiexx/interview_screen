import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Box,
  Flex,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { Text, Input, Grid, GridItem } from "@chakra-ui/react";
import Checkbox from "components/Checkbox/Checkbox";
import { permissions } from "../data";

const CreateRole = ({ isOpen, onClose }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [selected, setSelected] = useState([]);
  const [select, setSelect] = useState(false);

  const handleClick = (name) => {
    console.log(name);
  };

  const handleAll = () => {
    setSelect(!select);
    if (!select) {
      const newSelected = permissions.map(
        (n) => n.value.write && n.value.create
      );
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={isNotSmallerScreen ? "lg" : null}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#000000" fontSize="20px">
          Create Role
        </ModalHeader>
        <ModalCloseButton color="#D6D6E0" />
        <Box borderBottom="1px solid #E0E1E3" />
        <ModalBody>
          <Text fontSize="13px" fontWeight="600" mb="9px" mt="30px">
            Role Name
          </Text>
          <Input
            type="text"
            placeholder="Enter role name"
            borderRadius="9px"
            bg="#EBF0F5"
            border="none"
            outline="none"
            _placeholder={{
              color: "#464E5F",
              fontSize: "13px",
            }}
          />
          <Box mt="32px" borderBottom="1px dashed #EBF0F5" pb="18px">
            <Text fontSzie="16px" fontWeight="600" mb="26px">
              Role Permissions
            </Text>
            <Grid templateColumns="repeat(2,1fr)" gap={6}>
              <GridItem>
                <Text fontSzie="16px" fontWeight="600">
                  Module Name
                </Text>
              </GridItem>
              <GridItem>
                <Flex>
                  <Checkbox handleSelect={handleAll} select={select} />
                  <Text
                    fontSzie="13px"
                    fontWeight="500"
                    ml="10px"
                    color="#888C9F"
                  >
                    Select All
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Box>

          {permissions.map((data) => {
            const isItemSelected = isSelected(
              data.value.write && data.value.create
            );
            return (
              <Box borderBottom="1px dashed #EBF0F5" pb="18px" pt="17px">
                <Grid templateColumns="repeat(2,1fr)" gap={6}>
                  <GridItem>
                    <Text fontSzie="16px" fontWeight="600">
                      {data.name}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Flex alignItems="center">
                      <Checkbox
                        select={isItemSelected}
                        handleSelect={() => handleClick(data.value.write)}
                      />
                      <Text
                        fontSzie="13px"
                        fontWeight="500"
                        ml="10px"
                        color="#888C9F"
                      >
                        Write
                      </Text>
                      <Box ml="30px">
                        <Flex>
                          <Checkbox
                            select={isItemSelected}
                            handleSelect={() => handleClick(data.value.create)}
                          />
                          <Text
                            fontSzie="13px"
                            fontWeight="500"
                            ml="10px"
                            color="#888C9F"
                          >
                            Create
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </GridItem>
                </Grid>
              </Box>
            );
          })}

          <Flex justifyContent="flex-end" mt="34px" pb="30px">
            <Box>
              <Flex>
                <Button
                  onClick={onClose}
                  bg="#FFEAE1CF"
                  fontSize="12px"
                  color="#F18651"
                  _hover={{
                    background: "#FFEAE1CF",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  bg="#D54A39"
                  fontSize="12px"
                  color="#fff"
                  ml="11px"
                  _hover={{
                    background: "#D54A39",
                  }}
                >
                  Create Role
                </Button>
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateRole;
