import React from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import styles from "../styles.module.css";
import { new_arrival_members } from "../data";

const head = ["Products", "earnings", "comission", "compnay", "rating", ""];

const NewArrivalTable = () => {
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
        >
          <Box>
            <Text color="#212121" fontSize="18px" fontWeight="500">
              New Arrivals
            </Text>
            <Text mt="7px" color="#B5B5C3" fontSize="12px" fontWeight="500">
              More than 400+ new members
            </Text>
          </Box>
          <Flex alignItems="center" alignContent="center">
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
          <table className={styles.table}>
            <thead>
              <tr className={styles.table_head}>
                {head.map((data, id) => (
                  <th key={id}>{data}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {new_arrival_members.map((members) => (
                <tr key={members.id}>
                  <td>
                    <Flex>
                      <Box
                        bg="#F3F6F9"
                        p="4px"
                        borderRadius="6px"
                        w="auto"
                        h="50px"
                        display="flex"
                        placeItems="center"
                      >
                        <Image
                          borderRadius="6px"
                          src={members.user}
                          alt="people"
                        />
                      </Box>
                      <Box ml="15px">
                        <Text fontSize="14px" fontWeight="600" color="#464E5F">
                          {members.name}
                        </Text>
                        <Text color="#B5B5C3" fontSize="13px" fontWeight="500">
                          {members.stack}
                        </Text>
                      </Box>
                    </Flex>
                  </td>
                  <td>
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
                  </td>
                  <td>
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
                  </td>
                  <td>
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
                  </td>
                  <td>
                    <Text
                      color="#B5B5C3"
                      textTransform={"capitalize"}
                      fontSize="13px"
                      fontWeight="500"
                    >
                      {members.rating}
                    </Text>
                  </td>
                  <td>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
    </div>
  );
};

export default NewArrivalTable;
