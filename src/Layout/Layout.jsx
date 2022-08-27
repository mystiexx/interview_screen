import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";
import styles from "./styles.module.css";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);

  const onOpen = () => {
    setShow(!show);
  };

  return (
    <div>
      <Box>
        <div className={styles.container}>
          <div className={styles.menu}>
            <SideBar />
          </div>
          <div className={styles.interface}>
            <NavBar onOpen={onOpen} />
            <div className={styles.interface_content}>{children}</div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Layout;
