import React from "react";
import {
  Box,
  Text,
  Input,
  Grid,
  InputGroup,
  InputRightElement,
  Select,
  useMediaQuery,
} from "@chakra-ui/react";
import Search from "../../../assets/icons/Search";

const Filters = ({ onSearchEmail, onSearchName, onFilter, filter, onDate }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Box
        borderRadius="12px"
        bg="#fff"
        pt="20px"
        pl="30px"
        pr="30px"
        pb="36px"
        mt="24px"
      >
        <Grid
          templateColumns={isNotSmallerScreen ? "repeat(4,1fr)" : "auto"}
          gap={6}
        >
          <Box>
            <Text fontSize="13px" fontWeight="600">
              Name
            </Text>
            <InputGroup mt="9px">
              <Input
                type="text"
                placeholder="Search by client name"
                bg="#EBF0F5"
                border="none"
                onChange={onSearchName}
              />
              <InputRightElement children={<Search color="#DADADA" />} />
            </InputGroup>
          </Box>

          <Box>
            <Text fontSize="13px" fontWeight="600">
              Email
            </Text>
            <InputGroup mt="9px">
              <Input
                type="email"
                placeholder="Search by client email"
                bg="#EBF0F5"
                border="none"
                onChange={onSearchEmail}
              />
              <InputRightElement children={<Search color="#DADADA" />} />
            </InputGroup>
          </Box>

          <Box>
            <Text fontSize="13px" fontWeight="600">
              Date Created
            </Text>

            <Input
              mt="9px"
              type="date"
              placeholder="Select date"
              bg="#EBF0F5"
              border="none"
              onChange={onDate}
            />
          </Box>

          <Box>
            <Text fontSize="13px" fontWeight="600">
              Status
            </Text>

            <Select bg="#EBF0F5" mt="9px" border="none" onChange={onFilter}>
              <option value="">Filter by status</option>
              {filter.map((filter, id) => (
                <option
                  value={filter}
                  key={id}
                  style={{ textTransform: "capitalize" }}
                >
                  {filter}
                </option>
              ))}
            </Select>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Filters;
