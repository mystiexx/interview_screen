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
import {  FiArrowLeft } from "react-icons/fi";

const BusinessInformation = ({ prev, next, data }) => {
  const handleSubmit = (values) => {
    next(values, true);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form>
          <Grid templateColumns="repeat(3,1fr)" gap={6}>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Business Name
              </Text>
              <Input
                type="text"
                onChange={handleChange}
                name="business_name"
                placeholder="Enter business name"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Business Phone Number
              </Text>
              <Input
                type="text"
                onChange={handleChange}
                name="business_phone_number"
                placeholder="Enter business phone number"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Business Type
              </Text>
              <Input
                type="text"
                name="business_type"
                onChange={handleChange}
                placeholder="Enter business type"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>

            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Tax ID Number
              </Text>
              <Input
                type="text"
                name="tax_id_number"
                onChange={handleChange}
                placeholder="Enter tax ID number"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Industry
              </Text>
              <Select bg="#EBF0F5" name="industry" onChange={handleChange}>
                <option selected disabled>
                  Choose Industry
                </option>
              </Select>
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Incorporation Date
              </Text>
              <Input
                type="date"
                onChange={handleChange}
                name="incorporation_date"
                placeholder="Enter last name"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>

            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Registration Number
              </Text>
              <Input
                type="text"
                name="registration_number"
                onChange={handleChange}
                placeholder="Enter registration number"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Monthly Turnover
              </Text>
              <Input
                type="text"
                name="monthly_turnover"
                onChange={handleChange}
                placeholder="Enter monthly turnover"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Net Profit Of Previous Year
              </Text>
              <Input
                type="text"
                name="net_profit_of_previous_year"
                onChange={handleChange}
                placeholder="Enter net profit of previous year"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>

            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Director Name
              </Text>
              <Input
                type="text"
                name="director_name"
                onChange={handleChange}
                placeholder="Enter director name"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Director Phone Number
              </Text>
              <Input
                type="text"
                name="director_phone_number"
                onChange={handleChange}
                placeholder="Enter phone number"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Business Bank Name
              </Text>
              <Select
                bg="#EBF0F5"
                name="business_bank_name"
                onChange={handleChange}
              >
                <option selected disbaled>
                  Choose Bank
                </option>
              </Select>
            </GridItem>

        

           
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Business Account Number
              </Text>
              <Input
                type="text"
                onChange={handleChange}
                name="business_account_number"
                placeholder="Enter business account number"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
          </Grid>

          <Box
            mt="58px"
            mb="50px"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            alignContent="center"
          >
            <Flex>
              <Button
                leftIcon={<FiArrowLeft color="#F18651" />}
                type="button"
                bg="#FFEAE1CF"
                color="#F18651"
                fontSize="12px"
                fontWeight="600"
                _hover={{ background: "#FFEAE1CF" }}
                onClick={() => prev(values)}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
              
                ml="24px"
                type="submit"
                bg="#D54A39"
                color="#fff"
                fontSize="12px"
                fontWeight="600"
                _hover={{ background: "#D54A39" }}
              >
                {" "}
                Submit{" "}
              </Button>
            </Flex>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default BusinessInformation;
