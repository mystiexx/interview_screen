import React from "react";
import { Box, Text, Flex, Button, useMediaQuery } from "@chakra-ui/react";
import { IoAddOutline } from "react-icons/io5";
import { info } from "../data";

const ClientCard = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box bg="#fff" borderRadius="12px" p="30px">
      <Flex
        justifyContent="space-between"
        flexDirection={isNotSmallerScreen ? "row" : "column"}
      >
        <Box>
          <Flex flexDirection={isNotSmallerScreen ? "row" : "column"}>
            <Box bg="#EBF0F5" w="197px" h="197px" borderRadius="6px"></Box>

            <Box ml={isNotSmallerScreen ? "23px" : null}>
              <Text
                fontSize="22px"
                fontWeight="700"
                mt={isNotSmallerScreen ? null : "8px"}
              >
                Joshua Damilare
              </Text>

              <Flex mt="14px" alignItems="center">
                <Text color="#888C9F" fontSzie="14px" fontWeight="600">
                  Loan Officer:
                </Text>
                <Text ml="9px" fontSize="14px" fontWeight="600">
                  Ayokunmi Charles
                </Text>
              </Flex>

              <Box mt="24px">
                <Flex
                  flexDirection={isNotSmallerScreen ? "row" : "column"}
                  columns="2"
                >
                  {info.map((data) => (
                    <Box
                      key={data.id}
                      border="1px dashed #E3E6EF"
                      borderRadius="6px"
                      mr={isNotSmallerScreen ? "16px" : "none"}
                      mt={isNotSmallerScreen ? null : "8px"}
                      p="16px"
                    >
                      <Text>{data.amount}</Text>
                      <Text
                        color="#888C9F"
                        fontSize="12px"
                        fontWeight="400"
                        mt="12px"
                      >
                        {data.title}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          mt={isNotSmallerScreen ? "none" : "8px"}
        >
          <Button
            leftIcon={<IoAddOutline color="#fff" />}
            bg="#D54A39"
            color="#fff"
            fontSize="12px"
            fontWeight="600"
            _hover={{ background: "#D54A39" }}
            borderRadius="6px"
          >
            New Application
          </Button>
          <Box
            display="flex"
            justifyContent={isNotSmallerScreen ? "flex-end" : "none"}
          >
            <Button
              w={isNotSmallerScreen ? "86px" : "100%"}
              mt="10px"
              bg="#FFEAE1CF"
              color="#F18651"
              fontSize="12px"
              fontWeight="600"
              _hover={{ background: "#FFEAE1CF" }}
              borderRadius="6px"
            >
              Export
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ClientCard;
