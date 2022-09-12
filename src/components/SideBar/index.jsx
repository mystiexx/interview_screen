import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import ArrowDoubleLeft from "../../assets/icons/ArrowDoubleLeft";
import logo from "../../assets/images/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { routes, otherRoutes } from "./routes";
import styles from "./styles.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const SideBar = () => {
  const location = useLocation();

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

        <Box
          mt="20px"
          overflowY="scroll"
          h="100vh"
          display="flex"
          flexDirection="column"
        >
          {routes.map((route, index) => {
            return (
              <Accordion key={index} allowMutiple allowToggle>
                <AccordionItem border="none">
                  {({ isExpanded }) => (
                    <>
                      <NavLink
                        to={route?.link}
                        className={({ isActive }) =>
                          isActive ? styles.accordion_active : styles.accordion
                        }
                      >
                        <AccordionButton
                          w="100%"
                          _hover={{ background: "none" }}
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            alignContent="center"
                            flex="1"
                            textAlign="left"
                            fontSize="13px"
                          >
                            <Box mr={3}>
                              {route?.link === location.pathname
                                ? route.iconActive
                                : route?.link?.includes(
                                    location.pathname.split("/")[1]
                                  )
                                ? route.iconActive
                                : route.icon}
                            </Box>
                            {route.title}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </NavLink>
                      <AccordionPanel>
                        {route?.sub_routes?.map((sub, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={sub.link}
                              className={styles.accordion_content}
                            >
                              - {sub.name}
                            </NavLink>
                          );
                        })}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            );
          })}

          <Box borderTop="1px solid #494B69" mt="65px" pb="200px">
            <div className={styles.accordion_section}>
              {otherRoutes.map((route, index) => (
                <Accordion key={index} allowMutiple allowToggle>
                  <AccordionItem border="none">
                    {({ isExpanded }) => (
                      <>
                        <NavLink
                          to={route?.link}
                          className={({ isActive }) =>
                            isActive
                              ? styles.accordion_active
                              : styles.accordion
                          }
                        >
                          <AccordionButton
                            w="100%"
                            _hover={{ background: "none" }}
                          >
                            <Box
                              display="flex"
                              alignItems="center"
                              alignContent="center"
                              flex="1"
                              textAlign="left"
                              fontSize="13px"
                            >
                              <Box mr={3}>
                                {route?.link === location?.pathname
                                  ? route.iconActive
                                  : route?.link?.includes(
                                      location.pathname.split("/")[1]
                                    )
                                  ? route.iconActive
                                  : route.icon}
                              </Box>
                              {route.title}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </NavLink>
                        <AccordionPanel>
                          {route?.sub_routes?.map((sub, index) => {
                            return (
                              <NavLink
                                key={index}
                                to={sub.link}
                                className={styles.accordion_content}
                              >
                                - {sub.name}
                              </NavLink>
                            );
                          })}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SideBar;
