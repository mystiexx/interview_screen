import React, { useState, useRef } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import ArrowDoubleLeft from "../../assets/icons/ArrowDoubleLeft";
import ArrowDoubleRight from "../../assets/icons/ArrowDoubleRight";
import logo from "../../assets/images/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "./routes";
import styles from "./styles.module.css";
import CheveronRight from "../../assets/icons/CheveronRight";
import ChevronDown from "../../assets/icons/ChevronDown";

const SideBar = ({ onShrink, shrink }) => {
  const [show, setShow] = useState(false);
  const content = useRef(null);
  const location = useLocation();

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <Box position="relative" bg="#1E1E2D" color="#888C9F" h="100vh">
        <Box
          pt="14px"
          pb={shrink ? "20px" : "25px"}
          bg="#1B1B28"
          pl="27px"
          pr={shrink ? "25px" : "none"}
        >
          <Flex
            placeItems={shrink ? "none" : "center"}
            justifyContent={"space-between"}
            alignItems="center"
            alignContent="center"
          >
            <Image display={shrink ? "block" : "none"} src={logo} alt="logo" />
            <Box
              cursor="pointer"
              onClick={onShrink}
              mr={shrink ? "none" : "20px"}
            >
              {shrink ? <ArrowDoubleLeft /> : <ArrowDoubleRight />}
            </Box>
          </Flex>
        </Box>

        <Box mt="20px">
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
                    {shrink ? route.title : null}
                  </Box>

                  {shrink ? (
                    <Box>
                      {route?.sub_routes && show ? (
                        <ChevronDown />
                      ) : route?.sub_routes ? (
                        <CheveronRight />
                      ) : (
                        <CheveronRight />
                      )}
                    </Box>
                  ) : null}
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
    </div>
  );
};

export default SideBar;
