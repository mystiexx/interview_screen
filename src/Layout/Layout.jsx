import React from "react";
import { Box, Grid, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Box>
        {isNotSmallerScreen ? (
          <Grid templateColumns={"265px auto"}>
            <Box>
              <SideBar />
            </Box>
            <Box w="auto">
              <NavBar />
              <Box h={"100vh"} overflowY={"scroll"} bg="#EEF0F8">
                {children}
              </Box>
            </Box>
          </Grid>
        ) : (
          <Box>
            {" "}
            <NavBar />
            <Box
              h={isNotSmallerScreen ? "100vh" : "auto"}
              overflowY={"scroll"}
              bg="#EEF0F8"
            >
              {children}
            </Box>{" "}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Layout;
