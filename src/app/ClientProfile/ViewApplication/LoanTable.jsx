import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { loan } from "../data";
import Badge from "components/Badge";

const LoanTable = () => {
  return (
    <Box p="31px" bg="#fff" borderRadius="12px" mt="24px">
      <Text fontSize="18px" fontWeight="700">
        Loan Overview (Client ID#: 000001 | LOAN ID#: 000002467 | REF ID#: N/A)
      </Text>

      <TableContainer overflowX="auto" mt="34px">
        <Table variant="unstyled">
          <Thead
            bg="#F3F6F9"
            borderRadius="6px"
            color="#B5B5C3"
            fontSize="12px"
            fontWeight="600"
          >
            <Tr textAlign="center">
              <Th colSpan="3" textAlign="center">
                Principal
              </Th>
              <Th colSpan="3" textAlign="center">
                Interest
              </Th>
              <Th textAlign="left">Balance</Th>
              <Th colSpan="2" textAlign="center">
                Collection
              </Th>
              <Th textAlign="center">Total</Th>
            </Tr>
            <Tr>
              <Th textTransform="capitalize" color="#464E5F">
                Invoice Date
              </Th>
              <Th textTransform="capitalize" color="#464E5F">
                Collection Date
              </Th>
              <Th textTransform="capitalize" color="#464E5F">
                Amount
              </Th>
              <Th textTransform="capitalize" color="#464E5F">
                Invoice Date
              </Th>
              <Th textTransform="capitalize" color="#464E5F">
                Collection Date
              </Th>
              <Th textTransform="capitalize" color="#464E5F">
                Amount
              </Th>
              <Th textTransform="capitalize" color="#464E5F">
                Amount
              </Th>
              <Th textTransform="capitalize" color="#464E5F">
                Status
              </Th>
              <Th textTransform="capitalize" color="#464E5F">
                Action
              </Th>
              <Th textTransform="capitalize" color="#464E5F">
                Amount
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {loan.map((loan) => (
              <Tr
                key={loan.id}
                borderBottom="1px solid #F3F6F9"
                pt="33px"
                pb="25px"
                fontSize="14px"
                fontWeight="600"
              >
                <Td>{loan.invoice_date}</Td>
                <Td>{loan.collection_date}</Td>
                <Td>{loan.amount}</Td>
                <Td>{loan.invoice_date}</Td>
                <Td>{loan.collection_date}</Td>
                <Td>{loan.amount}</Td>
                <Td>{loan.amount}</Td>
                <Td>
                  {loan.status === "in progress" ? (
                    <Badge bgColor="#F8DEFF" color="#BD00FF">
                      {loan.status}
                    </Badge>
                  ) : loan.status === "approved" ? (
                    <Badge color="#009992" bgColor="#C9F7D6">
                      {loan.status}
                    </Badge>
                  ) : (
                    <Badge bgColor="#FFE2E5" color="#F64E60">
                      {loan.status}
                    </Badge>
                  )}
                </Td>
                <Td>
                  {" "}
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
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LoanTable;
