import React from "react";
import {
  Box,
  Text,
  Button,
  Container,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import Trash from "../../assets/icons/Trash";
import { roles } from "./data";
import RolesCard from "./components/RolesCard";
import RolesTable from "./components/RolesTable";
import BackArrow from "../../assets/icons/BackArrow";

const ViewRoles = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Layout>
      <Container maxW="container.xl" pb="100px">
        <Box pt="24px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
          >
            <Flex alignItems='center'>
            <BackArrow/>
            <Text fontSize="32px" fontWeight="600" ml='16px'>
              View Role
            </Text>
            </Flex>
           

            <Button
              leftIcon={<Trash color="#fff" />}
              bg="#FF4040"
              borderRadius="6px"
              color="#fff"
              fontSize="12px"
              fontWeight="600"
              _hover={{ background: "#FF4040" }}
            >
              Disable Role
            </Button>
          </Flex>

          <Flex flexDirection={isNotSmallerScreen ? "row" : "column"} mt="41px">
            <Box w={isNotSmallerScreen ? "374px" : "100%"}>
              {roles.slice(0, 1).map((role) => {
                return (
                  <RolesCard
                    id={role.id}
                    key={role.id}
                    title={role.title}
                    permissions={role.permissions}
                    user={role.users}
                    showView={false}
                  />
                );
              })}
            </Box>
            <Box
              ml={isNotSmallerScreen ? "18px" : null}
              mt={isNotSmallerScreen ? null : "24px"}
              w={isNotSmallerScreen ? "auto" : "100%"}
            >
              <RolesTable />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Layout>
  );
};

export default ViewRoles;
