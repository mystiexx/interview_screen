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
  Select,
} from "@chakra-ui/react";
import { Input, Text } from "@chakra-ui/react";

const AddBankDetails = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#000000" fontSize="20px">
          Add Bank Details
        </ModalHeader>
        <ModalCloseButton color="#D6D6E0" />
        <Box borderBottom="1px solid #E0E1E3" />
        <ModalBody>
          <Text fontSize="13px" fontWeight="600" mb="9px" mt="30px">
            Account Name
          </Text>
          <Input
            type="text"
            placeholder="Enter account name"
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
            Account Number
          </Text>
          <Input
            type="text"
            placeholder="Enter account number"
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
            Bank Name
          </Text>
          <Select  borderRadius="9px"
          label='Select bank'
            bg="#EBF0F5"
            border="none"
            outline="none"
          >
            <option disabled>Select bank</option>

          </Select>
        
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
                  Add Bank Details
                </Button>
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddBankDetails;
