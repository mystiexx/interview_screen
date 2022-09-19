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
import { getCountries, getStates } from "country-state-picker";
import { FiArrowLeft } from "react-icons/fi";

const ReferenceInformation = ({ prev, next, data }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [st, setSt] = useState("");

  const handleSubmit = (values) => {
    next(values, true);
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
    <div>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <Grid templateColumns="repeat(3,1fr)" gap={6}>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Reference Name
                </Text>
                <Input
                  type="text"
                  name="reference_name"
                  placeholder="Enter reference name"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                Reference Phone Number
                </Text>
                <Input
                  type="text"
                  name="reference_phone_number"
                  placeholder="Enter reference phone number"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                Reference Occupation
                </Text>
                <Input
                  type="text"
                  name="reference_occupation"
                  placeholder="Enter reference occupation"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                Reference Email Address
                </Text>
                <Input
                  type="text"
                  name="reference_email"
                  placeholder="Enter reference email address"
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
                  name="reference_relationship"
                  placeholder="Enter relationship with client"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                Reference Address
                </Text>
                <Input
                  type="text"
                  name="reference_address"
                  placeholder="Enter reference address"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
            
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Country
                </Text>
                <Select bg="#EBF0F5" name="reference_country" onChange={handleCountry}>
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
                <Select bg="#EBF0F5" name="reference_state">
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

              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Years Known
                </Text>
                <Input
                  type="text"
                  name="years_known"
                  placeholder="Years known reference"
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
              mt='58px' mb='50px'
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
    </div>
  );
};

export default ReferenceInformation;
