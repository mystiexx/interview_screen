import React from "react";
import {
  Box,
  Text,
  Button,
  Container,
  Flex,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import { IoAddOutline } from "react-icons/io5";
import RolesCard from "./components/RolesCard";
import { roles } from "./data";

const Roles = () => {
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
            <Text fontSize="32px" fontWeight="600">
              Roles and Permission
            </Text>

            <Button
              leftIcon={<IoAddOutline color="#fff" />}
              bg="#D54A39"
              borderRadius="6px"
              color="#fff"
              fontSize="12px"
              fontWeight="600"
              _hover={{ background: "#D54A39" }}
            >
              Create Role
            </Button>
          </Flex>

          <Grid
            templateColumns={isNotSmallerScreen ? "repeat(3,1fr)" : "auto"}
            gap={3}
            mt="23px"
          >
            {roles.map((role) => {
              return (
                <RolesCard
                  id={role.id}
                  key={role.id}
                  title={role.title}
                  permissions={role.permissions}
                  user={role.users}
                  showView={true}
                />
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Roles;
