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
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const BusinessInformation = ({ prev, next, data }) => {
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
      {({ values, handleChange }) => (
        <Form>
          <Grid templateColumns="repeat(3,1fr)" gap={2}>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Product Sold
              </Text>
              <Input
                type="text"
                name="product_sold"
                onChange={handleChange}
                placeholder="Enter product"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Amount Invested
              </Text>
              <Input
                type="text"
                name="amount_invested"
                onChange={handleChange}
                placeholder="Enter amount"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Name Of Market
              </Text>
              <Input
                type="text"
                name="name_of_market"
                onChange={handleChange}
                placeholder="Enter market"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>

            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Years In Market
              </Text>
              <Input
                type="text"
                name="years_in_market"
                onChange={handleChange}
                placeholder="Enter years"
                bg="#EBF0F5"
                mb="10px"
              />
            </GridItem>

            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Market Address
              </Text>
              <Input
                type="text"
                name="market_address"
                onChange={handleChange}
                placeholder="Enter market address"
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
              <Select bg="#EBF0F5" name="state" onChange={handleChange}>
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
                rightIcon={<FiArrowRight color="#fff" />}
                ml="24px"
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

export default BusinessInformation;
