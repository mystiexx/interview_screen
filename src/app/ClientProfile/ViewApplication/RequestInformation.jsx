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
  useMediaQuery
} from "@chakra-ui/react";
import { Text, Textarea } from "@chakra-ui/react";

const RequestInformation = ({ isOpen, onClose }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={isNotSmallerScreen ? "lg" : null }>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#000000" fontSize="20px">
          Request Information
        </ModalHeader>
        <ModalCloseButton color="#D6D6E0" />
        <Box borderBottom="1px solid #E0E1E3" />
        <ModalBody>
          <Text fontSize="13px" fontWeight="600" mb="9px" mt="31px">
            Request Type
          </Text>
          <Select
            borderRadius="9px"
            label="Select bank"
            bg="#EBF0F5"
            border="none"
            outline="none"
          >
            <option  selected>Comment</option>
          </Select>
          <Text fontSize="13px" fontWeight="600" mb="9px" mt="30px">
          Request Description
          </Text>
          <Textarea
            type="text"
            placeholder="Enter description"
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
                 Save Changes
                </Button>
              </Flex>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RequestInformation;
