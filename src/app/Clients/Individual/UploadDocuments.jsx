import React, { useRef } from "react";
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
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const UploadDocuments = ({ next, data, prev }) => {
  const imageRef = useRef();
  const idRef = useRef();
  const signRef = useRef();

  const handleSubmit = (values) => {
    next(values);
  };

  const openImage = () => {
    imageRef.current.click();
  };

  const openID = () => {
    idRef.current.click();
  };

  const openSign = () => {
    signRef.current.click();
  };
  
  

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <Grid templateColumns="repeat(3,1fr)" gap={2}>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Upload Image
              </Text>
              <Box
                bg="#EBF0F5"
                p='10px'
                fontSize='13px'
                fontWeight='400'
                color='#888C9F'
                mb="10px"
                borderRadius="9px"
                cursor="pointer"
                onClick={openImage}
              >
                Choose file
              </Box>
              <Input
                type="file"
                bg="#EBF0F5"
                mb="10px"
                display="none"
                ref={imageRef}
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Upload ID Card
              </Text>
              <Box
                bg="#EBF0F5"
                mb="10px"
                p='10px'
                fontSize='13px'
                fontWeight='400'
                color='#888C9F'
                borderRadius="9px"
                cursor="pointer"
                onClick={openID}
              >
                Choose file
              </Box>
              <Input
                type="text"
               display='none'
               ref={idRef}
              />
            </GridItem>
            <GridItem>
              <Text fontSize="13px" fontWeight="600" mb="9px">
                Upload Signature
              </Text>
              <Box
                bg="#EBF0F5"
                mb="10px"
                borderRadius="9px"
                cursor="pointer"
                onClick={openSign}
                p='10px'
                fontSize='13px'
                fontWeight='400'
                color='#888C9F'
              >
                Choose file
              </Box>
              <Input
                type="text"
               display='none'
               ref={signRef}
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
  );
};

export default UploadDocuments;
