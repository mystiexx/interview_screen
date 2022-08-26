import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  const [shrink, setShrink] = useState(true);

  const onShrink = () => {
    setShrink(!shrink);
  };
  return (
    <div>
      <Box>
        <Grid
          templateColumns={shrink ? "265px auto" : "65px auto"}
          transition="0.5s ease-in"
        >
          <Box>
            <SideBar onShrink={onShrink} shrink={shrink} />
          </Box>
          <Box>
            <NavBar />
            <Box h="100vh" overflowY={"scroll"} bg="#EEF0F8">
              {children}
            </Box>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
