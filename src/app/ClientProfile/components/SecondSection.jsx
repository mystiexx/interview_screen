import React from "react";
import {
  Box,
  Text,
  Flex,
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
  useMediaQuery,
  Spacer,
} from "@chakra-ui/react";
import Search from "../../../assets/icons/Search";
import Timeline from "../../Dashboard/components/Timeline";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import ApplicationTable from "./ApplicationTable";

const SecondSection = () => {
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
              Application
            </Text>
            <Box>
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
            </Box>
          </Flex>
          <ApplicationTable />
        </Box>

        <Spacer />

        <Box
          p="30px"
          borderRadius="12px"
          bg="#fff"
          mt={isNotSmallerScreen ? null : "24px"}
          ml={isNotSmallerScreen ? "19px" : null}
        >
          <Flex justifyContent="space-between" alignItems="center" mb="39px">
            <Text color="#212121" fontSize="18px" fontWeight={"600"}>
              Recent Activities
            </Text>

            <Flex>
              <IconButton
                bg="#F3F6F9"
                _hover={{ background: "#F3F6F9" }}
                icon={<BiChevronLeft color="#D6D6E0" />}
              />

              <IconButton
                ml="14px"
                bg="#FFEEE7"
                _hover={{ background: "#FFEEE7" }}
                icon={<BiChevronRight color="#F18651" />}
              />
            </Flex>
          </Flex>
          <Timeline />
        </Box>
      </Flex>
    </div>
  );
};

export default SecondSection;
