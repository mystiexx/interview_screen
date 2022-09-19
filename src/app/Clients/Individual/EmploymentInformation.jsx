import React, { useState, useEffect } from 'react'
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
  import { getCountries, getStates } from 'country-state-picker';
  import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const EmploymentInformation = ({ prev, next, data }) => {
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
        {({ values }) => (
          <Form>
            <Grid templateColumns="repeat(3,1fr)" gap={6}>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                 Employer Name
                </Text>
                <Input
                  type="text"
                  name="employer_name"
                  placeholder="Enter employer name"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                 Work Email Address
                </Text>
                <Input
                  type="text"
                  name="work_email"
                  placeholder="Enter work email address"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Industry
                </Text>
                <Select bg="#EBF0F5" name="industry">
                  <option selected disabled>Select industry</option>
                </Select>
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                  Job Title
                </Text>
                <Input
                  type="text"
                  name="job_title"
                  placeholder="Enter job title"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
                <Text fontSize="13px" fontWeight="600" mb="9px">
                 Salary
                </Text>
                <Input
                  type="text"
                  name="salary"
                  placeholder="Enter salary"
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
                  name="work_address"
                  placeholder="Enter address"
                  bg="#EBF0F5"
                  mb="10px"
                />
              </GridItem>
              <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                  Country
                </Text>
                <Select bg="#EBF0F5" name="work_country" onChange={handleCountry}>
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
                <Select bg="#EBF0F5" name="work_state">
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
                 Date of Employment
                </Text>
                <Input
                  type="date"
                  name="date_of_employment"
                  placeholder="Enter Account Number"
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
  )
}

export default EmploymentInformation
