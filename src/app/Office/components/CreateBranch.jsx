import React from "react";
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
} from "@chakra-ui/react";
import { Input, Text } from "@chakra-ui/react";

const CreateBranch = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#000000" fontSize="20px">
          Create Branch
        </ModalHeader>
        <ModalCloseButton />
        <Box borderBottom="1px solid #E0E1E3" />
        <ModalBody>
          <Text fontSize="13px" fontWeight="600" mb="9px" mt="30px">
            Branch Name
          </Text>
          <Input
            type="text"
            placeholder="Enter address"
            borderRadius="9px"
            bg="#EBF0F5"
            border="none"
            outline="none"
            _placeholder={{
              color: "#464E5F",
              fontSize: "13px",
            }}
          />
          <Text fontSize="13px" fontWeight="600" mb="9px" mt="34px">
            Branch Location
          </Text>
          <Input
            type="text"
            placeholder="Enter address"
            borderRadius="9px"
            bg="#EBF0F5"
            border="none"
            outline="none"
            _placeholder={{
              color: "#464E5F",
              fontSize: "13px",
            }}
          />
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
                  Create Branch
                </Button>
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateBranch;
