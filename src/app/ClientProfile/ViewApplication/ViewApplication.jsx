import React from "react";
import { Container, Box, Text, Flex } from "@chakra-ui/react";
import Layout from "../../../Layout/Layout";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/icons/BackArrow";
import LoanInformation from "./LoanInformation";
import Comments from "./Comments";
import InformationRequest from "./InformationRequest";
import LoanTable from "./LoanTable";
import Documents from "./Documents";

const ViewApplication = () => {
  return (
    <Layout>
      <Container maxW="container.xl" pb="100px">
        <Link to="/clients">
          <Flex alignItems="center" pt="24px">
            <BackArrow />
            <Text fontSize="32px" fontWeight="600" ml="16px">
            View Application
            </Text>
          </Flex>
        </Link>
        <Box mt='24px'>
        <LoanInformation/>
        <LoanTable/>
        <Documents/>
        <InformationRequest/>
        <Comments/>
        </Box>
      </Container>
    </Layout>
  );
};

export default ViewApplication;
