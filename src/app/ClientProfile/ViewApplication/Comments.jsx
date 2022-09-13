import React from "react";
import { Box, Text, Textarea, Button, Flex } from "@chakra-ui/react";

const Comments = () => {
  return (
    <Box p="31px" bg="#fff" borderRadius="12px" mt="24px">
      <Text mb="25px" fontSize="18px" fontWeight="700">
        Comments
      </Text>
      <Flex>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="36px"
          h="35px"
          color="#fff"
          bg="#F18651"
          borderRadius='4px'
        >
          S
        </Box>
        <Textarea
          ml="8px"
          placeholder="Add Comment"
          bg="#EBF0F5"
          _placeholder={{
            color: "Add Comment",
          }}
        />
      </Flex>
      <Flex mt="24px" justifyContent="flex-end">
        <Button
          bg="#D54A39"
          color="#fff"
          fontSize="12px"
          fontWeight="600"
          _hover={{
            background: " #D54A39",
          }}
        >
          Add Comment
        </Button>
      </Flex>
    </Box>
  );
};

export default Comments;
