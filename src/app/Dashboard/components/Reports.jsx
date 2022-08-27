import React, { useState } from "react";
import { Box, Text, Flex,  Image, useMediaQuery } from "@chakra-ui/react";
import { new_arrivals, sales_progress } from "../data";
import Badge from "../../../components/Badge";
import Collections from "../../../assets/icons/Collections";
import Write from "../../../assets/icons/Write";
import Trash from "../../../assets/icons/Trash";
import Dots from "../../../assets/icons/Dots";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";

const time = ["month", "week", "day"];

const Reports = () => {
  const [active, setActive] = useState("day");
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Flex flexDirection={isNotSmallerScreen ? "row" : "column"} mt="30px">
        {/* sales progress card */}
        <Box
          bg="#FFFFFF"
          borderRadius="12px"
          pl="29px"
          pr="29px"
          pt="23px"
          pb="23px"
          w={isNotSmallerScreen ? "372px" : "100%"}
          mr="30px"
        >
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            alignContent="center"
          >
            <Text fontSize="17px" color="#212121" fontWeight="600">
              Sales Progress
            </Text>
            <Box>
              <Dots />
            </Box>
          </Flex>

          {sales_progress.map((sales) => (
            <Box key={sales.id} mt="23px">
              <Flex>
                <Box
                  bg={sales.bgColor}
                  display="grid"
                  placeItems={"center"}
                  w="40px"
                  h="40px"
                  borderRadius="12px"
                >
                  {sales?.icon}
                </Box>
                <Box ml="14px">
                  <Text color="#000000" fontSize={"13px"} fontWeight="500">
                    {sales.title}
                  </Text>
                  <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                    {sales.sub_title}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>

        {/* new arrivals card */}
        <Box
          bg="#FFFFFF"
          borderRadius="12px"
          pl="29px"
          pr="29px"
          pt="23px"
          pb="33px"
          mt={isNotSmallerScreen ? null : '24px'}
          w={isNotSmallerScreen ? "auto" : "100%"}
        >
          <Flex
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            w="100%"
            flexDirection={isNotSmallerScreen ? "row" : "column"}
          >
            <Box w="100%">
              <Text color="#212121" fontSize="18px" fontWeight="500">
                New Arrivals
              </Text>
              <Text mt="7px" color="#B5B5C3" fontSize="12px" fontWeight="500">
                More than 400+ new members
              </Text>
            </Box>
            <Flex
              justifyContent={isNotSmallerScreen ? "flex-end" : null}
              alignItems="center"
              alignContent="center"
              w="100%"
              mt={isNotSmallerScreen ? null : "20px"}
            >
              {time.map((time, id) => (
                <Box
                  key={id}
                  p="10px"
                  bg={active !== time ? null : "#464E5F"}
                  onClick={() => setActive(time)}
                  borderRadius="6px"
                  cursor="pointer"
                >
                  <Text
                    textTransform={"capitalize"}
                    fontSize="12px"
                    fontWeight="600"
                    color={active !== time ? "#B5B5C3" : "#fff"}
                  >
                    {time}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Flex>
          <Box mt="24px">
            <TableContainer
              overflowX="auto"
              w={isNotSmallerScreen ? "auto" : "372px"}
            >
              <Table variant="unstyled">
                <Tbody>
                  {new_arrivals.map((arrival) => (
                    <Tr key={arrival.id}>
                      <Td>
                        <Flex>
                          <Box
                            mr="15px"
                            ml="-20px"
                            bg="#F3F6F9"
                            w="50px"
                            h="50px"
                            borderRadius="6px"
                            display="flex"
                            justifyContent="center"
                            alignContent="center"
                            alignItems="center"
                          >
                            <Image src={arrival.image} alt="stuff" />
                          </Box>
                          <Box>
                            <Text
                              fontSize="14px"
                              fontWeight="600"
                              color="#464E5F"
                            >
                              {arrival.name}
                            </Text>
                            <Text
                              color="#B5B5C3"
                              fontSize="13px"
                              fontWeight="500"
                            >
                              <strong style={{ color: "#464E5F" }}>FTP:</strong>
                              {arrival.email}
                            </Text>
                          </Box>
                        </Flex>
                      </Td>
                      <Td>
                        <Text
                          fontSize="14px"
                          fontWeight="600"
                          textAlign="right"
                          color="#464E5F"
                        >
                          {arrival.price.amount}
                        </Text>
                        <Text
                          color="#B5B5C3"
                          textTransform={"capitalize"}
                          fontSize="13px"
                          fontWeight="500"
                          textAlign="right"
                        >
                          {arrival.price.status}
                        </Text>
                      </Td>
                      <Td>
                        <Box>
                          {arrival.status === "in progress" ? (
                            <Badge color="#FFA800" bgColor="#FFF4DE">
                              {arrival.status}
                            </Badge>
                          ) : arrival.status === "approved" ? (
                            <Badge bgColor="#EEE5FF" color="#8950FC">
                              {arrival.status}
                            </Badge>
                          ) : arrival.status === "success" ? (
                            <Badge bgColor="#C9F7F5" color="#1BC5BD">
                              {arrival.status}
                            </Badge>
                          ) : (
                            <Badge bgColor="#FED6DA" color="#F64E60">
                              {arrival.status}
                            </Badge>
                          )}
                        </Box>
                      </Td>
                      <Td>
                        <Flex>
                          <Box
                            display="flex"
                            placeItems="center"
                            bg="#F3F6F9"
                            borderRadius="6px"
                            pr="9.25px"
                            pl="9.25px"
                            w="auto"
                            h="32px"
                            cursor="pointer"
                          >
                            <Collections color="#3699FF" />
                          </Box>
                          <Box
                            display="flex"
                            placeItems="center"
                            bg="#F3F6F9"
                            borderRadius="6px"
                            pr="9.25px"
                            pl="9.25px"
                            w="auto"
                            h="32px"
                            ml="10px"
                            cursor="pointer"
                          >
                            <Write />
                          </Box>
                          <Box
                            display="flex"
                            placeItems="center"
                            bg="#F3F6F9"
                            borderRadius="6px"
                            pr="9.25px"
                            pl="9.25px"
                            w="auto"
                            h="32px"
                            ml="10px"
                            cursor="pointer"
                          >
                            <Trash />
                          </Box>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Reports;
