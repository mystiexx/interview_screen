import React, { useState } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { users } from "../data";
import Trash from "../../../assets/icons/Trash";
import Tick from "../../../assets/icons/Tick";

const RolesTable = () => {
  const [selected, setSelected] = useState([]);
  const [select, setSelect] = useState(false);

  const handleSelectAllClick = (event) => {
    setSelect(!select);
    if (!select) {
      const newSelecteds = users.map((n) => n.user);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    console.log(newSelected);

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Box
      w="auto"
      bg="#fff"
      borderRadius="12px"
      pt="23px"
      pl="30px"
      pr="30px"
      pb="30px"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Text color="#212121" fontSize="18px" fontWeight="700">
            Users Assigned
          </Text>
          <Text color="#888C9F" fontSize="12px" mt="6px">
            All the users assigned to this role
          </Text>
        </Box>
        {selected.length >= 1 && (
          <Flex alignItems="center">
            <Text color="#000" fontSize="12px" fontWeight="600">
              {selected.length} user selected
            </Text>
            <Button
              bg="#D54A39"
              borderRadius="6px"
              color="#fff"
              fontSize="12px"
              fontWeight="600"
              _hover={{ background: "#D54A39" }}
              ml="14px"
            >
              Remove User
            </Button>
          </Flex>
        )}
      </Flex>

      <TableContainer overflowX="auto" mt="36px">
        <Table variant="unstyled">
          <Thead bg="#F3F6F9">
            <Tr>
              <Th>
                <Box
                  w="24px"
                  h="24px"
                  borderRadius="6px"
                  bg={select ? "#F18651" : "#ECF0F3"}
                  role="checkbox"
                  onClick={handleSelectAllClick}
                  cursor="pointer"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                >
                  {select && <Tick />}
                </Box>
              </Th>
              <Th color="#464E5F" fontSize="12px" fontWeight="600">
                ID
              </Th>
              <Th color="#B5B5C3" fontSize="12px" fontWeight="600">
                user
              </Th>
              <Th color="#B5B5C3" fontSize="12px" fontWeight="600">
                date added
              </Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {users.map((user) => {
              const isItemSelected = isSelected(user.user);
              const labelId = `table-checkbox-${user.user}`;
              return (
                <Tr key={user.id} borderBottom="1px solid #F3F6F9">
                  <Td colSpan={1}>
                    <Box
                      w="24px"
                      h="24px"
                      borderRadius="6px"
                      bg={isItemSelected ? "#F18651" : "#ECF0F3"}
                      role="checkbox"
                      selected={isItemSelected}
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      onClick={() => handleClick(user.user)}
                      cursor="pointer"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      alignContent="center"
                    >
                      {isItemSelected && <Tick />}
                    </Box>
                  </Td>
                  <Td color="#888C9F" fontWeight="600" id={labelId}>
                    {user.id}
                  </Td>
                  <Td color="#F18651" fontWeight="700">
                    {user.user}
                  </Td>
                  <Td color="#888C9F" fontWeight="500">
                    {user.created_at}
                  </Td>
                  <Td>
                    {" "}
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
                      <Trash color="#FF3636" />
                    </Box>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RolesTable;
