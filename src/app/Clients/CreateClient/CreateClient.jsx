import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Box,
  useMediaQuery,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Individual from "../Individual";
import { tabs } from "../data";
import Business from "../Business";
import Corporate from "../Corporate";

const CreateClient = ({ isOpen, onClose }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  const [selected, setSelected] = useState("Individual");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={isNotSmallerScreen ? "4xl" : null}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#000000" fontSize="20px">
          Add New Client
        </ModalHeader>
        <ModalCloseButton color="#D6D6E0" />

        <Box borderBottom="1px solid #E0E1E3" />
        <ModalBody>
          <Text
            mt="30px"
            ml="70px"
            fontSize="13px"
            fontWeight="600"
            color="#464E5F"
            mb="13px"
          >
            Select Client Type
          </Text>
          <Tabs variant="unstyled">
            <TabList ml="70px">
              {tabs.map((tab) => (
                <Tab
                  onClick={() => setSelected(tab.title)}
                  textAlign="left"
                  w="220px"
                  mr="16px"
                  border="1px dashed #888C9F"
                  borderRadius="12px"
                  _selected={{
                    background: "#D54A390D",
                    border: "1px dashed #D54A39",
                  }}
                >
                  <Flex aligItems="center">
                    <Box
                      w="30px"
                      h="15px"
                      bg={selected !== tab.title ? "#ECF0F3" : "#D54A39"}
                      borderRadius="100%"
                      display='flex'
                      alignItems='center'
                      alignContent='center'
                      justifyContent='center'
                      mr="10px"
                      mt="5px"
                    >
                      {selected === tab.title && (
                        <Box
                          w="5px"
                          h="7px"
                          borderRadius="full"
                          bg="#fff"
                        ></Box>
                      )}
                    </Box>
                    <Box>
                      <Text color="#000000" fontSize="16px" fontWeight="600">
                        {tab.title}
                      </Text>
                      <Text
                        fontSize="13px"
                        color="#888C9F"
                        fontWeight="400"
                        mt="12px"
                      >
                        {tab.sub}
                      </Text>
                    </Box>
                  </Flex>
                </Tab>
              ))}
            </TabList>

            <Box borderBottom="1px dashed #888C9F80" mt="48px" />
            <TabPanels>
              <TabPanel>
                <Individual />
              </TabPanel>
              <TabPanel>
                <Business />
              </TabPanel>
              <TabPanel>
                <Corporate/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateClient;
