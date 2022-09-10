import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RolesCard = ({ title, permissions, user, id, showView }) => {
  return (
    <Box bg="#fff" pl="30px" pr="30px" pt="23px" borderRadius="12px" pb="24px">
      <Text color="#000000" fontSize="20px" fontWeight="600">
        {title}
      </Text>

      <Text color="#888C9F" mt="36px">
        Total users with this role:{" "}
        <strong style={{ color: "#F18651" }}>{user}</strong>{" "}
      </Text>

      <Box mt="24px">
        {permissions.map((data, id) => (
          <Flex key={id} mb="14px" alignItems="center">
            <Box w="20px" bg="#F18651" h="5px" borderRadius="10px" />
            <Text color="#888C9F" fontSize="14px" ml="12px" fontWeight="400">
              {data}
            </Text>
          </Flex>
        ))}
      </Box>

      <Text
        mt="14px"
        fontStyle="italic"
        fontSize="14px"
        fontWeight="400"
        color="#888C9F"
      >
        and 7 more
      </Text>

      <Flex mt="32px" alignItems="center">
        {showView && (
          <Link to={`/settings/roles/${id}`}>
            <Button
              bg="#FFEEE7"
              borderRadius="8px"
              mr="12px"
              color="#F18651"
              fontSize="14px"
              fontWeight="500"
              _hover={{
                background: "#FFEEE7",
              }}
            >
              View Role
            </Button>
          </Link>
        )}

        <Button
          bg="#FFEEE7"
          borderRadius="8px"
          color="#F18651"
          fontSize="14px"
          fontWeight="500"
          _hover={{
            background: "#FFEEE7",
          }}
        >
          Edit Role
        </Button>
      </Flex>
    </Box>
  );
};

export default RolesCard;
