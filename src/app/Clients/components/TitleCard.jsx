import React from "react";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import Export from "../../../assets/icons/Export";
import AddUser from "../../../assets/icons/AddUser";

const TitleCard = ({ onDownload }) => {
  return (
    <div>
      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
        >
          <Text fontSize="32px" fontWeight="600">
            Clients
          </Text>
          <Box>
            <Flex alignItems="center" alignContent="center">
              <Button
                leftIcon={<AddUser />}
                bg="#D54A39"
                color="#fff"
                fontSize="12px"
                _hover={{
                  background: "#D54A39",
                }}
              >
                Create client
              </Button>
              <Button
                leftIcon={<Export />}
                bg="#FFEAE1CF"
                color=" #F18651"
                fontSize="12px"
                ml="10px"
                onClick={onDownload}
                _hover={{
                  background: "#FFEAE1CF",
                }}
              >
                Export
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default TitleCard;
