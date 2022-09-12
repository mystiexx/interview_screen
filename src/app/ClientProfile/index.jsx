import React from "react";
import Layout from "../../Layout/Layout";
import { Container, Box, Text, Flex } from "@chakra-ui/react";
import BackArrow from "../../assets/icons/BackArrow";
import { Link } from "react-router-dom";
import ClientCard from "./components/ClientCard";
import FourthSection from "./components/FourthSection";
import ThirdSection from "./components/ThirdSection";
import SecondSection from "./components/SecondSection";


const ClientProfile = () => {
  return (
    <div>
      <Layout>
        <Container maxW="container.xl" pb="100px">
          <Box pt="24px">
            <Link to="/clients">
              <Flex alignItems="center">
                <BackArrow />
                <Text fontSize="32px" fontWeight="600" ml="16px">
                  Client Profile
                </Text>
              </Flex>
            </Link>

            <Box mt="24px">
              <ClientCard />
              <SecondSection />
              <ThirdSection />
              <FourthSection />
            </Box>
          </Box>
        </Container>
      </Layout>
    </div>
  );
};

export default ClientProfile;
