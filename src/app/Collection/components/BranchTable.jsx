import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Box,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { clientData } from "../../Clients/data";

const head = ["Client", "Loan id", "Amount Due", "date due", ""];

const BranchTable = () => {
  return (
    <Box
      mt="35.18px"
      bg="#fff"
      pl="30px"
      pt="24.71px"
      pr="30px"
      pb="48px"
      borderRadius="12px"
    >
      <TableContainer overflowX="auto">
        <Table variant="unstyled">
          <Thead bg="#F3F6F9">
            <Tr>
              {head.map((data, id) => (
                <Th key={id} color="#464E5F" fontSize="12px" fontWeight="600">
                  {data}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {clientData.map((client) => (
              <Tr key={client.id} borderBottom="1px solid #F3F6F9">
                <Td>
                  <Flex>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignContent="center"
                      alignItems="center"
                    >
                      <Image
                        borderRadius="6px"
                        src={client.image}
                        alt="people"
                      />
                    </Box>
                    <Box ml="15px">
                      <Text fontSize="14px" fontWeight="700">
                        {client.name}
                      </Text>
                      <Text color="#B5B5C3" fontSize="13px" fontWeight="500">
                        {client.email}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td fontSize='14px' fontWeight='600' color='#464E5F'>{client.loan_officer}</Td>
                <Td fontSize='14px' fontWeight='600' color='#464E5F'>
                  {" "}
                  {client.currency}
                  {client.price}
                </Td>
                <Td fontSize='14px' fontWeight='600' color='#888C9F'>{client.created_at}</Td>
                <Td>
                  <Button
                    color="#F18651"
                    bg="#FFF0E8"
                    fontSize="12px"
                    fontWeight="600"
                    _hover={{
                      background: "#FFF0E8",
                    }}
                  >
                    View Loan
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BranchTable;
