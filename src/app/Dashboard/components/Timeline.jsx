import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const Timeline = () => {
  return (
    <div>
      <Box mt="14px">
        <Flex
          justifyContent="space-between"
          // alignItems="center"
          // alignContent={"center"}
        >
          <Text color="#464E5F" fontSize="14px" fontWeight="600" mr="11px">
            08:42
          </Text>
          <Box
            mt="1"
            borderRadius="100%"
            border="3px solid #663259"
            h="15px"
            w="20px"
          ></Box>
          <Text color="#80808F" fontSize="12px" fontWeight="400" ml="11px">
            Outlines keep you honest. Indulging in poorly driving and keep
            structure
          </Text>
        </Flex>
        <Box
          position="relative"
          marginLeft="53px"
          w="3px"
          h="40px"
          bg="#E5EAEE"
          borderRadius={"8px"}
          mt="-15px"
          mb="1px"
        />

        <Flex justifyContent="space-between">
          <Text color="#464E5F" fontSize="14px" fontWeight="600" mr="11px">
            10:00
          </Text>
          <Box
            mt="1"
            borderRadius="100%"
            border="3px solid #1BC5BD"
            h="15px"
            w="20px"
          ></Box>
          <Text color="#80808F" fontSize="12px" fontWeight="400" ml="11px">
            Outlines keep you honest. Indulging in poorly driving and keep
            structure
          </Text>
        </Flex>

        <Box
          position="relative"
          marginLeft="53px"
          w="3px"
          h="32px"
          bg="#E5EAEE"
          borderRadius={"8px"}
          mt="-15px"
          mb="1px"
        />
        <Flex>
          <Text color="#464E5F" fontSize="14px" fontWeight="600" mr="11px">
            14:37
          </Text>
          <Box
            mt="1"
            borderRadius="100%"
            border="3px solid #F64E60"
            h="15px"
            w="15px"
          ></Box>
          <Text
            color="#80808F"
            fontSize="13px"
            fontWeight="600"
            ml="11px"
            mt={1}
          >
            Make deposit <strong style={{ color: "#8950FC" }}>USD 700</strong>{" "}
            to ESL
          </Text>
        </Flex>

        <Box
          position="relative"
          marginLeft="53px"
          w="3px"
          h="24px"
          bg="#E5EAEE"
          borderRadius={"8px"}
          mt="-2px"
          mb="1px"
        />

        <Flex>
          <Text color="#464E5F" fontSize="14px" fontWeight="600" mr="11px">
            16:50
          </Text>
          <Box
            mt="1"
            borderRadius="100%"
            border="3px solid #3699FF"
            h="15px"
            w="25px"
          ></Box>
          <Text
            color="#80808F"
            fontSize="12px"
            fontWeight="400"
            ml="11px"
            mt={1}
          >
            Outlines keep you honest. Indulging in poorly driving and keep
            structure keep you honest great
          </Text>
        </Flex>

        <Box
          position="relative"
          marginLeft="53px"
          w="3px"
          h="55px"
          bg="#E5EAEE"
          borderRadius={"8px"}
          mt="-30px"
          mb="1px"
        />

        <Flex>
          <Text color="#464E5F" fontSize="14px" fontWeight="600" mr="11px">
            21:03
          </Text>
          <Box
            mt="1"
            borderRadius="100%"
            border="3px solid #EF6327"
            h="15px"
            w="15px"
          ></Box>
          <Text
            color="#464E5F"
            fontSize="13px"
            fontWeight="600"
            ml="11px"
            mt={1}
          >
            New order placed{" "}
            <strong style={{ color: "#8950FC" }}>#XF-2356</strong>
          </Text>
        </Flex>

        <Box
          position="relative"
          marginLeft="53px"
          w="3px"
          h="24px"
          bg="#E5EAEE"
          borderRadius={"8px"}
          mt="-1px"
          mb="1px"
        />

        <Flex>
          <Text color="#464E5F" fontSize="14px" fontWeight="600" mr="11px">
            23:07
          </Text>
          <Box
            mt="1"
            borderRadius="100%"
            border="3px solid #8950FC"
            h="15px"
            w="25px"
          ></Box>
          <Text
            color="#80808F"
            fontSize="12px"
            fontWeight="400"
            ml="11px"
            mt={1}
          >
            Outlines keep you honest. Indulging in poorly driving and keep
            structure keep you honest great
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Timeline;
