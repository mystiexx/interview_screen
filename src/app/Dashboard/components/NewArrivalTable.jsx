import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { new_arrival_members } from "../data";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const head = ["Products", "earnings", "comission", "compnay", "rating", ""];

const NewArrivalTable = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Box
        bg="#FFFFFF"
        mt="31px"
        borderRadius="12px"
        pl="29px"
        pr="29px"
        pt="23px"
        pb="23px"
      >
        <Flex
          justifyContent="space-between"
          alignContent="center"
          alignItems="center"
          flexDirection={isNotSmallerScreen ? "row" : "column"}
          w="100%"
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
            justifyContent={isNotSmallerScreen ? "flex-end" : "flex-start"}
            alignItems="center"
            alignContent="center"
            w="100%"
            mt={isNotSmallerScreen ? null : "20px"}
          >
            <Button
              bg="#3699FF"
              color="#fff"
              mr="10px"
              fontSize="12px"
              fontWeight="600"
              _hover={{
                background: "#3699FF",
              }}
            >
              New Report
            </Button>
            <Button
              bg="#F64E60"
              color="#fff"
              fontSize="12px"
              fontWeight="600"
              _hover={{
                background: "#F64E60",
              }}
            >
              Create
            </Button>
          </Flex>
        </Flex>
        <Box mt="24px">
          <TableContainer
            overflowX="auto"
            w={isNotSmallerScreen ? "auto" : "372px"}
          >
            <Table variant="unstyled">
              <Thead>
                <Tr>
                  {head.map((data, id) => (
                    <Th key={id}>{data}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {new_arrival_members.map((members) => (
                  <Tr key={members.id}>
                    <Td>
                      <Flex>
                        <Box
                          w="50px"
                          h="50px"
                          bg="#F3F6F9"
                          borderRadius="6px"
                          display="flex"
                          justifyContent="center"
                          alignContent="center"
                          alignItems="center"
                        >
                          <Image
                            borderRadius="6px"
                            src={members.user}
                            alt="people"
                          />
                        </Box>
                        <Box ml="15px">
                          <Text
                            fontSize="14px"
                            fontWeight="600"
                            color="#464E5F"
                          >
                            {members.name}
                          </Text>
                          <Text
                            color="#B5B5C3"
                            fontSize="13px"
                            fontWeight="500"
                          >
                            {members.stack}
                          </Text>
                        </Box>
                      </Flex>
                    </Td>
                    <Td>
                      <Text fontSize="14px" fontWeight="600" color="#464E5F">
                        {members.earn.amount}
                      </Text>
                      <Text
                        color="#B5B5C3"
                        textTransform={"capitalize"}
                        fontSize="13px"
                        fontWeight="500"
                      >
                        {members.earn.status}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize="14px" fontWeight="600" color="#464E5F">
                        {members.commission.amount}
                      </Text>
                      <Text
                        color="#B5B5C3"
                        textTransform={"capitalize"}
                        fontSize="13px"
                        fontWeight="500"
                      >
                        {members.commission.status}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize="14px" fontWeight="600" color="#464E5F">
                        {members.company.name}
                      </Text>
                      <Text
                        color="#B5B5C3"
                        textTransform={"capitalize"}
                        fontSize="13px"
                        fontWeight="500"
                      >
                        {members.company.type}
                      </Text>
                    </Td>
                    <Td>
                      <Image src={members.star} alt="star" />
                      <Text
                        color="#B5B5C3"
                        textTransform={"capitalize"}
                        fontSize="13px"
                        fontWeight="500"
                      >
                        {members.rating}
                      </Text>
                    </Td>
                    <Td>
                      {" "}
                      <Button
                        bg="#C9F7F5"
                        color="#1BC5BD"
                        fontSize="12px"
                        fontWeight="600"
                        _hover={{
                          background: "#C9F7F5",
                        }}
                      >
                        View Offer
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default NewArrivalTable;
