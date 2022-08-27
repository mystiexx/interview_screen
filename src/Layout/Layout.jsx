import React from "react";
import { Box, Grid, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Box>
        <Grid
          templateColumns={isNotSmallerScreen ? "265px auto" : "auto"}
          transition="0.5s ease-in"
        >
          <Box display={isNotSmallerScreen ? "block" : "none"}>
            <SideBar />
          </Box>
          <Box>
            <NavBar />
            <Box
              h={isNotSmallerScreen ? "100vh" : "auto"}
              overflowY={"scroll"}
              bg="#EEF0F8"
            >
              {children}
            </Box>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
