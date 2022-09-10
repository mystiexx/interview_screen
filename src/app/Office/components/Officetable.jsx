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
} from "@chakra-ui/react";
import { office } from "../data";
import Trash from '../../../assets/icons/Trash'
import Write from '../../../assets/icons/Write'

const head = ["Name", "Location", "Date created", ""];

const Officetable = ({ onOpen }) => {
  return (
    <Box mt="35.18px">
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
            {office.map((data) => (
                <Tr key={data.id} borderBottom='1px solid #F3F6F9'>
                    <Td fontSize='14px' fontWeight='700'>
                        {data.name}
                    </Td>
                    <Td fontSize='14px' fontWeight='700'>
                        {data.location}
                    </Td>
                    <Td fontSize='14px' fontWeight='600' color='#888C9F'>{data.created_at}</Td>
                    <Td>
                        <Flex>
                        <Box
                            display="flex"
                            placeItems="center"
                            bg="#FFF0E8"
                            borderRadius="6px"
                            pr="9.25px"
                            pl="9.25px"
                            w="auto"
                            h="32px"
                            ml="10px"
                            cursor="pointer"
                            onClick={() => onOpen(data)}
                          >
                            <Write color='#F18651'/>
                          </Box>
                        <Box
                            display="flex"
                            placeItems="center"
                            bg="#FFF0E8"
                            borderRadius="6px"
                            pr="9.25px"
                            pl="9.25px"
                            w="auto"
                            h="32px"
                            ml="10px"
                            cursor="pointer"
                          >
                            <Trash color='#F18651'/>
                          </Box>
                        </Flex>
                    </Td>
                </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Officetable;
