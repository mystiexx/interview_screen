import React, { useState, useEffect } from "react";
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
import { getCountries, getStates } from "country-state-picker";

const ApplicantInformation = ({ next, data }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [st, setSt] = useState("");

  const handleSubmit = (values) => {
    next(values);
  };

  const handleCountry = (e) => {
    let data = JSON.parse(e.target.value);
    setSt(data.code);
  };

  useEffect(() => {
    let country = getCountries();
    setCountries(country);
  }, []);

  useEffect(() => {
    let states = getStates(st);
    setStates(states);
  }, [st]);
  return (
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
                Email Address
              </Text>
              <Input
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Enter email address"
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
                onChange={handleChange}
                name="phone_number"
                placeholder="Enter phone number"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>

            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Address
              </Text>
              <Input
                type="text"
                onChange={handleChange}
                name="address"
                placeholder="Enter address "
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>

            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Country
              </Text>
              <Select bg="#EBF0F5" name="country" onChange={handleCountry}>
                <option disabled selected>
                  Select country
                </option>
                {countries.map((data) => (
                  <option key={data.code} value={JSON.stringify(data)}>
                    {data.name}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                State
              </Text>
              <Select bg="#EBF0F5" name="applicant_state" onChange={handleChange}>
                <option disabled selected>
                  Select state
                </option>
                {states?.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </Select>
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
  );
};

export default ApplicantInformation;
