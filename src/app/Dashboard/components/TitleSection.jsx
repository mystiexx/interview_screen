import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import FilePlus from "../../../assets/icons/FilePlus";

const days = ["Today", "Month", "Year"];

const TitleSection = () => {
  const [active, setActive] = useState("Today");
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Box bg="#fff" borderTop={"2px solid #EEEFF3"} pt="11px" pb="11px">
        <Container maxW="container.xl">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
            flexDirection={isNotSmallerScreen ? "row" : "column"}
          >
            <Box w='100%'>
              <Flex
                alignItems="center"
                alignContent="center"
                justifyContent={isNotSmallerScreen ? null : "space-between"}
              >
                <Text fontSize="20px" fontWeight="600">
                  Clients
                </Text>
                <Text
                  color="#EBEDF2"
                  ml={isNotSmallerScreen ? " 42px" : null}
                  mr={isNotSmallerScreen ? "14px" : null }
                >
                  |
                </Text>
                <Text fontSize="13px" color="#959CB6" fontWeight="500">
                  #XRS-45670
                </Text>
                <Button
                  ml="9px"
                  bg="#FFF4DE"
                  borderRadius="6px"
                  color="#FFA800"
                  fontSize="13px"
                  fontWeight="500"
                  _hover={{ background: "#FFF4DE" }}
                >
                  Add New
                </Button>
              </Flex>
            </Box>

            <Box mt={isNotSmallerScreen ? null : "20px"}>
              <Flex>
                {days.map((day, id) => (
                  <Box
                    mr="26px"
                    key={id}
                    cursor="pointer"
                    borderRadius="4px"
                    p={active !== day ? "4px" : "4px"}
                    onClick={() => setActive(day)}
                    bg={active !== day ? null : "#F3F6F9"}
                    color={active !== day ? null : "#D54A39"}
                  >
                    <Text>{day}</Text>
                  </Box>
                ))}
                <Button
                  mr="26px"
                  bg="#F3F6F9"
                  borderRadius="4px"
                  fontSize="13px"
                  fontWeight="500"
                  color="#959CBD"
                  h="32px"
                  _hover={{
                    background: "#F3F6F9",
                  }}
                >
                  Actions
                </Button>
                <Box>
                  <FilePlus />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default TitleSection;
