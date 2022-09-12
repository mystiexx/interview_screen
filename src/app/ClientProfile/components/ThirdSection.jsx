import React from "react";
import {
  Grid,
  Box,
  Text,
  Flex,
  GridItem,
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
  useMediaQuery,
  Select,
  Spacer,
} from "@chakra-ui/react";
import Search from "../../../assets/icons/Search";
import { FiArrowDown, FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";
import { contacts } from "../data";
import ChequeTable from "./ChequeTable";

const ThirdSection = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Flex mt="24px" flexDirection={isNotSmallerScreen ? "row" : "column"}>
        <Box
          p="30px"
          w={isNotSmallerScreen ? "700px" : "auto"}
          borderRadius="12px"
          bg="#fff"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="#212121" fontSize="18px" fontWeight="700">
              Bad Cheques
            </Text>
            <Box>
              <Flex alignItems="center">
                <InputGroup bg="#EBF0F5" border="none" borderRadius="9px">
                  <Input
                    type="text"
                    placeholder="Search by cheque no"
                    border="none"
                    _placeholder={{
                      fontSize: "13px",
                    }}
                  />
                  <InputRightElement children={<Search color="#DADADA" />} />
                </InputGroup>

                <Select
                  bg="#EBF0F5"
                  border="none"
                  borderRadius="9px"
                  ml="14px"
                  _selected={{
                    fontSize: "13px",
                  }}
                >
                  <option selected>Filter by reason</option>
                </Select>
              </Flex>
            </Box>
          </Flex>
          <ChequeTable />
        </Box>

        <Spacer />

        <Box
          p="30px"
          borderRadius="12px"
          bg="#fff"
          mt={isNotSmallerScreen ? null : "24px"}
          ml={isNotSmallerScreen ? '19px' : null}
        >
          <Grid
            templateColumns="repeat(2,1fr)"
            gap={6}
            alignItems="center"
            mb="39px"
          >
            <GridItem>
              <Text color="#212121" fontSize="18px" fontWeight={"600"}>
                Call Log
              </Text>
            </GridItem>
            <GridItem>
              <Flex>
                <InputGroup
                  bg="#EBF0F5"
                  border="none"
                  w="104px"
                  borderRadius="9px"
                >
                  <Input type="text" placeholder="Search" border="none" />
                  <InputRightElement children={<Search color="#DADADA" />} />
                </InputGroup>
                <IconButton
                  ml="14px"
                  bg="#D54A39"
                  _hover={{ background: "#D54A39" }}
                  icon={<FiArrowDown color="#fff" />}
                />
              </Flex>
            </GridItem>
          </Grid>

          {contacts.map((contact) => (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              borderBottom="1px solid #F3F6F9"
              mt="21px"
              pb="17px"
            >
              <Flex alignItems="center">
                {contact.type === "outgoing" ? (
                  <Box
                    w="34px"
                    h="34px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    bg="#E1F0FF"
                    mr="8px"
                    borderRadius="8px"
                  >
                    <FiArrowUpRight color="#3699FF" />
                  </Box>
                ) : (
                  <Box
                    w="34px"
                    h="34px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    bg="#FFE2E5"
                    mr="8px"
                    borderRadius="8px"
                  >
                    <FiArrowDownLeft color="#F76170" />
                  </Box>
                )}
                <Box>
                  <Text fontSize="15px" fontWeight="600">
                    {contact.name}
                  </Text>
                  <Text fontSize="13px" color="#888C9F" fontWeight="500">
                    {contact.phone_number}
                  </Text>
                </Box>
              </Flex>

              <Text fontSzie="13px" fontWeight="500">
                {contact.time}
              </Text>
              <Text fontSize="13px" color="#888C9F" fontWeight="600">
                {contact.date}
              </Text>
            </Flex>
          ))}
        </Box>
      </Flex>
    </div>
  );
};

export default ThirdSection;
