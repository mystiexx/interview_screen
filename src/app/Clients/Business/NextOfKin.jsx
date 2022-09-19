import React from "react";
import {
  Input,
  Button,
  Grid,
  Box,
  Flex,
  Text,
  GridItem,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { FiArrowLeft } from "react-icons/fi";

const NextOfKin = ({ prev, next, data }) => {
  const handleSubmit = (values) => {
    next(values, true);
  };
  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <Grid templateColumns="repeat(3,1fr)" gap={2}>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Full Name
              </Text>
              <Input
                type="text"
                name="kin_full_name"
                placeholder="Enter full name"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Phone Number
              </Text>
              <Input
                type="text"
                name="kin_phone_number"
                placeholder="Enter phone number"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Relationship
              </Text>
              <Input
                type="text"
                name="kin_relationship"
                placeholder="Enter relationship"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
          </Grid>

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            alignContent="center"
            mt="58px"
            mb="50px"
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

export default NextOfKin;
