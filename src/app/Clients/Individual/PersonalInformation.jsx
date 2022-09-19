import React from "react";
import {
  Input,
  Button,
  Grid,
  Select,
  Box,
  Flex,
  Text,
  GridItem,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { FiArrowRight } from "react-icons/fi";

const PersonalInformation = ({ next, data }) => {
  const handleSubmit = (values) => {
    next(values);
  };
  return (
    <div>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ handleChange }) => (
          <Form>
            <Grid templateColumns="repeat(3,1fr)" gap={6}>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  First Name
                </Text>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="first_name"
                  placeholder="Enter first name"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Middle Name
                </Text>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="middle_name"
                  placeholder="Enter middle name"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Last Name
                </Text>
                <Input
                  type="text"
                  name="last_name"
                  onChange={handleChange}
                  placeholder="Enter last name"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Gender
                </Text>
                <Select bg="#EBF0F5" name="gender" onChange={handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Date of Birth
                </Text>
                <Input
                  type="date"
                  onChange={handleChange}
                  name="date_of_birth"
                  placeholder="Enter last name"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Marital Status
                </Text>
                <Select
                  bg="#EBF0F5"
                  name="marital_status"
                  onChange={handleChange}
                >
                  <option selected disbaled>
                    Choose Status
                  </option>
                  <option>Married</option>
                  <option>Single</option>
                </Select>
              </GridItem>

              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Loan Officer
                </Text>
                <Select
                  bg="#EBF0F5"
                  name="loan_officer"
                  onChange={handleChange}
                >
                  <option selected disbaled>
                    Choose Officer
                  </option>
                </Select>
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Branch
                </Text>
                <Select bg="#EBF0F5" name="branch" onChange={handleChange}>
                  <option selected disabled>
                    Choose Branch
                  </option>
                </Select>
              </GridItem>

              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  BVN
                </Text>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="bvn"
                  placeholder="Enter BVN"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>

              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Bank
                </Text>
                <Select bg="#EBF0F5" name="bank" onChange={handleChange}>
                  <option selected disabled>
                    Choose Bank
                  </option>
                </Select>
              </GridItem>

              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Account Number
                </Text>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="account_number"
                  placeholder="Enter Account Number"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
            </Grid>

            <Box mt="58px" mb="50px">
              <Flex justifyContent="flex-end" alignContent="center">
                <Button
                  rightIcon={<FiArrowRight color="#fff" />}
                  type="submit"
                  bg="#D54A39"
                  color="#fff"
                  fontSize="12px"
                  fontWeight="600"
                  _hover={{ background: "#D54A39" }}
                >
                  {" "}
                  Continue{" "}
                </Button>
              </Flex>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInformation;
