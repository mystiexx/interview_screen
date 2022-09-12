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
  Flex,
  Text,
} from "@chakra-ui/react";
import { application } from "../data";
import { FiArrowRight } from "react-icons/fi";
import Badge from "components/Badge";
import ProgressBar from "components/Progress/ProgressBar";

const ApplicationTable = () => {
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
            <Th color="#464E5F">Loan Amount</Th>
            <Th>Repayment progess</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          {application.map((data) => (
            <Tr
              key={data.id}
              borderBottom="1px solid #F3F6F9"
              pt="33px"
              pb="25px"
              fontSize="14px"
              fontWeight="600"
            >
              <Td>{data.amount}</Td>
              <Td>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  color="#B5B5C3"
                  fontSize="12px"
                  fontWeight="500"
                  mb="11px"
                >
                  <Text> {data.progress}%</Text>
                  <Text textAlign="right">{data.payment} paid </Text>
                </Flex>

                <ProgressBar length={data.progress} />
              </Td>
              <Td color="#888C9F">{data.date}</Td>
              <Td>
                {data.status === "pending" ? (
                  <Badge bgColor="#F8DEFF" color="#BD00FF">
                    {data.status}
                  </Badge>
                ) : data.status === "approved" ? (
                  <Badge color="#009992" bgColor="#C9F7D6">
                    {data.status}
                  </Badge>
                ) : (
                  <Badge bgColor="#FFE2E5" color="#F64E60">
                    {data.status}
                  </Badge>
                )}
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

export default ApplicationTable;
