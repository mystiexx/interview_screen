import React, { useState, useEffect } from "react";
import { Box, Flex, Container, Text, useMediaQuery } from "@chakra-ui/react";
import Search from "../../assets/icons/Search";
import Compiling from "../../assets/icons/Compiling";
import Notification from "../../assets/icons/Notification";
import { BiMenuAltLeft } from "react-icons/bi";
import Modal from "../Modal/Modal";
import Mobile from "./Mobile";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");


  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  return (
    <div>
      <Modal Open={open}>
        <Mobile toggle={toggle} />
      </Modal>
      <Box bg="#FFFFFF" pt="14px" pb="16px">
        <Container maxW="container.xl">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
          >
            <Box onClick={toggle} display={isNotSmallerScreen ? 'none' : 'block'}>
              <BiMenuAltLeft size={30} />
            </Box>
            <Box></Box>

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
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default NavBar;
