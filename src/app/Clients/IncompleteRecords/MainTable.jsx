import React from "react";
import { Box, Flex, Button, Image, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { clientData } from "../data";
import { Link } from "react-router-dom";

const MainTable = () => {
  return (
    <Box pt="33px" p="30px" borderRadius="12px" bg="#fff" mt="24px">
      <TableContainer overflowX="auto">
        <Table variant="unstyled">
          <Thead
            bg="#F3F6F9"
            borderRadius="6px"
            color="#B5B5C3"
            fontSize="12px"
            fontWeight="600"
          >
            <Tr>
              <Th color="#464E5F">Client</Th>
              <Th>Client id</Th>
              <Th>Missing Data</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {clientData.map((data) => (
              <Tr
                key={data.id}
                borderBottom="1px solid #F3F6F9"
                pt="33px"
                pb="25px"
                fontSize="14px"
                fontWeight="600"
              >
                <Td>
                  <Flex>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignContent="center"
                      alignItems="center"
                    >
                      <Image borderRadius="6px" src={data.image} alt="people" />
                    </Box>
                    <Box ml="15px">
                      <Text fontSize="14px" fontWeight="700">
                        {data.name}
                      </Text>
                      <Text color="#B5B5C3" fontSize="13px" fontWeight="500">
                        {data.email}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td>#000001</Td>
                <Td colSpan={1}>
                  First Name, Last Name, E - mail, Loan Officer, Address
                </Td>
                <Td>
                  <Link to={`/clients/${data.id}`}>
                    <Button
                      color="#F18651"
                      bg="#FFF0E8"
                      fontSize="12px"
                      fontWeight="600"
                      _hover={{
                        background: "#FFF0E8",
                      }}
                    >
                      View Client
                    </Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MainTable;
