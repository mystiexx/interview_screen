import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { cheque } from "../data";
import { FiArrowRight } from "react-icons/fi";

const ChequeTable = () => {
  return (
    <TableContainer overflowX="auto" mt="39px">
      <Table variant="unstyled">
        <Thead
          bg="#F3F6F9"
          borderRadius="6px"
          color="#B5B5C3"
          fontSize="12px"
          fontWeight="600"
        >
          <Tr>
            <Th color="#464E5F">Cheque No</Th>
            <Th>Bank</Th>
            <Th>Reason</Th>
            <Th>Date</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          {cheque.map((data) => (
            <Tr
              key={data.id}
              borderBottom="1px solid #F3F6F9"
              pt="33px"
              pb="25px"
              fontSize="14px" fontWeight="600"
            >
              <Td>{data.cheque_no}</Td>
              <Td>{data.bank}</Td>
              <Td>{data.reason}</Td>
              <Td color="#888C9F" fontSize="14px" fontWeight="600">
                {data.date}
              </Td>
              <Td>
                <Box
                  w="34px"
                  h="34px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  bg="#FFEEE7"
                  mr="8px"
                  borderRadius="8px"
                >
                  <FiArrowRight color="#F18651" />
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ChequeTable;
