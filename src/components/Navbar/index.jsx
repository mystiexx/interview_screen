import React from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
import Search from "../../assets/icons/Search";
import Compiling from "../../assets/icons/Compiling";
import Notification from "../../assets/icons/Notification";

const NavBar = () => {
  return (
    <div>
      <Box bg="#FFFFFF" pt="14px" pb="16px">
        <Container maxW="container.xl">
          <Flex
            justifyContent="flex-end"
            alignItems="center"
            alignContent="center"
          >
            <Box>
              <Flex alignItems="center" alignContent="center">
                <Box mr="14px">
                  <Search />
                </Box>
                <Box mr="14px">
                  <Compiling />
                </Box>
                <Box mr="14px">
                  <Box
                    position="absolute"
                    zIndex="1"
                    bg="#F18651"
                    borderRadius="full"
                    p="3px"
                    color="#fff"
                    w="15px"
                    h="15px"
                    border="2px solid #fff"
                    marginLeft="9px"
                    marginTop="-5px"
                    display="grid"
                    placeItems="center"
                  >
                    <Text position="relative">1</Text>
                  </Box>
                  <Notification />
                </Box>
                <Text fontSize="13px" color="#959CB6">
                  Hi, <strong style={{ color: "#6C7293" }}>Sean</strong>{" "}
                </Text>
                <Box
                  bg="#F18651"
                  display="grid"
                  placeItems="center"
                  borderRadius="4px"
                  w="36px"
                  h="35px"
                  color="#fff"
                  ml="14px"
                >
                  S
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default NavBar;
