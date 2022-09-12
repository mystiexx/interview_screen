import React from "react";
import {
  Grid,
  Flex,
  Text,
  Box,
  GridItem,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useMediaQuery,
} from "@chakra-ui/react";
import Search from "../../../assets/icons/Search";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { contacts } from "../data";

const FourthSection = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Grid
      templateColumns={isNotSmallerScreen ? "repeat(3,1fr)" : "auto"}
      gap={6}
      mt="24px"
    >
      <GridItem>
        {/* {personal information card} */}
        <Box p="30px" borderRadius="12px" bg="#fff">
          <Text fontSize="17px" fontWeight="600">
            Personal Information
          </Text>
          <Box mt="36px">
            <Flex
              justifyContent={"space-between"}
              alignItems="center"
              alignContent={"center"}
            >
              <Box>
                <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                  Full Name
                </Text>
                <Text fontSzie="16px" fontWeight="600">
                  Full Name
                </Text>
              </Box>
              <Box>
                <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                  Username
                </Text>
                <Text fontSzie="16px" fontWeight="600">
                  damdam
                </Text>
              </Box>
            </Flex>
            <Flex
              mt="42px"
              justifyContent={"space-between"}
              alignItems="center"
              alignContent={"center"}
            >
              <Box>
                <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                  Email
                </Text>
                <Text fontSzie="16px" fontWeight="600">
                  joshua.dam@gmail.com
                </Text>
              </Box>
              <Box>
                <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                  Phone
                </Text>
                <Text fontSzie="16px" fontWeight="600">
                  0833128923
                </Text>
              </Box>
            </Flex>
            <Flex
              mt="42px"
              justifyContent={"space-between"}
              alignItems="center"
              alignContent={"center"}
            >
              <Box>
                <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                  Address
                </Text>
                <Text fontSzie="16px" fontWeight="600">
                  Iyana Paja, Lagos
                </Text>
              </Box>
              <Box>
                <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                  Date Created
                </Text>
                <Text fontSzie="16px" fontWeight="600">
                  28 Mar, 2004
                </Text>
              </Box>
            </Flex>

            <Box bg="#FFF4DE" borderRadius="12px" p="26px" mt="48px">
              <Text
                color="#F18651"
                fontSize="14px"
                fontWeight="600"
                textAlign="center"
                mb="24px"
              >
                Bank Details
              </Text>
              <Flex
                justifyContent={"space-between"}
                alignItems="center"
                alignContent={"center"}
                mb="15px"
              >
                <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                  Bank Name
                </Text>
                <Text fontSize="16px" fontWeight="600" textAlign="right">
                  Guarantee trust Bank
                </Text>
              </Flex>
              <Flex
                justifyContent={"space-between"}
                alignItems="center"
                alignContent={"center"}
              >
                <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                  Account Number
                </Text>
                <Text fontSize="16px" fontWeight="600" textAlign="right">
                  083193823
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </GridItem>

      <GridItem>
        {/* employee card */}
        <Box p="30px" borderRadius="12px" bg="#fff">
          <Text fontSize="17px" fontWeight="600" mb="36px">
            Employee Information
          </Text>
          <Grid templateColumns="repeat(2,1fr)" gap={4}>
            <GridItem>
              <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                Job Description
              </Text>
              <Text fontSzie="16px" fontWeight="600">
                Porn actor
              </Text>
            </GridItem>
            <GridItem>
              <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                Employer
              </Text>
              <Text fontSzie="16px" fontWeight="600">
                Blacked Private
              </Text>
            </GridItem>
            <GridItem>
              <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                Office Address
              </Text>
              <Text fontSzie="16px" fontWeight="600">
                PO343 LA, California
              </Text>
            </GridItem>
            <GridItem>
              <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                Date Of Employment
              </Text>
              <Text fontSzie="16px" fontWeight="600">
                28 Mar, 2004
              </Text>
            </GridItem>
          </Grid>
        </Box>

        {/* reference card */}
        <Box p="30px" borderRadius="12px" bg="#fff" mt="24px">
          <Text fontSize="17px" fontWeight="600" mb="36px">
            Reference Information
          </Text>
          <Grid templateColumns="repeat(2,1fr)" gap={4}>
            <GridItem>
              <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                Reference Name
              </Text>
              <Text fontSzie="16px" fontWeight="600">
                Josh Kennedy
              </Text>
            </GridItem>
            <GridItem>
              <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                Phone
              </Text>
              <Text fontSzie="16px" fontWeight="600">
                0833128923
              </Text>
            </GridItem>
            <GridItem>
              <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                Email
              </Text>
              <Text fontSzie="16px" fontWeight="600">
                josh.ken@gmail.com
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>

      <GridItem>
        {/* contacts card */}
        <Box p="30px" borderRadius="12px" bg="#fff">
          <Grid
            templateColumns="repeat(2,1fr)"
            gap={6}
            alignItems="center"
            mb="39px"
          >
            <GridItem>
              <Text color="#212121" fontSize="18px" fontWeight={"600"}>
                Contacts
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
            <Grid
              templateColumns="repeat(2,1fr)"
              gap={6}
              alignItems="center"
              borderBottom="1px solid #F3F6F9"
              mt="21px"
              pb="17px"
            >
              <GridItem>
                <Text fontSize="15px" fontWeight="600">
                  {contact.name}
                </Text>
              </GridItem>
              <GridItem>
                <Flex>
                  <Text fontSzie="10px" color="#888C9F" fontWeight="500">
                    {contact.phone_number}
                  </Text>
                  <IconButton
                    ml="14px"
                    bg="#F3F6F9"
                    _hover={{ background: "#F3F6F9" }}
                    icon={<FiArrowRight color="#1BC5BD" />}
                  />
                </Flex>
              </GridItem>
            </Grid>
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default FourthSection;
