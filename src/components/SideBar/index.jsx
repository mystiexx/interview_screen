import React, { useState, useRef } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import ArrowDoubleLeft from "../../assets/icons/ArrowDoubleLeft";
import logo from "../../assets/images/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { routes, otherRoutes } from "./routes";
import styles from "./styles.module.css";
import CheveronRight from "../../assets/icons/CheveronRight";
import ChevronDown from "../../assets/icons/ChevronDown";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const content = useRef(null);
  const location = useLocation();

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <Box>
        <Box pt="14px" pb={"20px"} bg="#1B1B28" pl="27px" pr={"25px"}>
          <Flex
            placeItems={"none"}
            justifyContent={"space-between"}
            alignItems="center"
            alignContent="center"
          >
            <Image src={logo} alt="logo" />
            <Box cursor="pointer">
              <ArrowDoubleLeft />
            </Box>
          </Flex>
        </Box>

        <Box mt="20px" overflowY="scroll" h="100vh">
          <div className={styles.accordion_section}>
            {routes.map((route) => (
              <>
                <NavLink
                  to={route.link}
                  onClick={route?.sub_routes && toggle}
                  className={({ isActive }) =>
                    isActive ? styles.accordion_active : styles.accordion
                  }
                >
                  <Box display="flex" alignItems="center" alignContent="center">
                    <Box mr={3}>
                      {route.link === location.pathname
                        ? route.iconActive
                        : route.link.includes(location.pathname.split("/")[1])
                        ? route.icon
                        : route.icon}
                    </Box>
                    {route.title}
                  </Box>

                  <Box>
                    {route?.sub_routes && show ? (
                      <ChevronDown />
                    ) : route?.sub_routes ? (
                      <CheveronRight />
                    ) : (
                      <CheveronRight />
                    )}
                  </Box>
                </NavLink>

                {route?.sub_routes?.map((sub) => (
                  <NavLink
                    to={sub.link}
                    className={
                      show
                        ? styles.accordion_content
                        : styles.accordion_content_hidden
                    }
                    ref={content}
                  >
                    - {sub.name}
                  </NavLink>
                ))}
              </>
            ))}
          </div>

          <Box borderTop="1px solid #494B69" mt="65px" pb='200px'>
            <div className={styles.accordion_section}>
              {otherRoutes.map((route) => (
                <>
                  <NavLink
                    to={route.link}
                    onClick={route?.sub_routes && toggle}
                    className={({ isActive }) =>
                      isActive ? styles.accordion_active : styles.accordion
                    }
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      alignContent="center"
                    >
                      <Box mr={3}>
                        {route.link === location.pathname
                          ? route.iconActive
                          : route.link.includes(location.pathname.split("/")[1])
                          ? route.icon
                          : route.icon}
                      </Box>
                      {route.title}
                    </Box>

                    <Box>
                      {route?.sub_routes && show ? (
                        <ChevronDown />
                      ) : route?.sub_routes ? (
                        <CheveronRight />
                      ) : (
                        <CheveronRight />
                      )}
                    </Box>
                  </NavLink>

                  {route?.sub_routes?.map((sub) => (
                    <NavLink
                      to={sub.link}
                      className={
                        show
                          ? styles.accordion_content
                          : styles.accordion_content_hidden
                      }
                      ref={content}
                    >
                      - {sub.name}
                    </NavLink>
                  ))}
                </>
              ))}
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SideBar;
