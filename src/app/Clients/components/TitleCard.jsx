import React from "react";
import { Box, Button, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import Export from "../../../assets/icons/Export";
import AddUser from "../../../assets/icons/AddUser";

const TitleCard = ({ onDownload, onOpen }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          flexDirection={isNotSmallerScreen ? "row" : "column"}
        >
          <Text
            fontSize="32px"
            fontWeight="600"
            textAlign="left"
            mt={isNotSmallerScreen ? "24px" : "24px"}
            w="100%"
            mb={isNotSmallerScreen ? null : "24px"}
          >
            Clients
          </Text>
          <Box
            w="100%"
            display="flex"
            justifyContent={isNotSmallerScreen ? "flex-end" : "flex-start"}
          >
            <Flex alignItems="center" alignContent="center">
              <Button
                onClick={onOpen}
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
