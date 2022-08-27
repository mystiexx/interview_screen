import React, { useState } from "react";
import { Box, Text, Flex, Grid, Image, useMediaQuery } from "@chakra-ui/react";
import { new_arrivals, sales_progress } from "../data";
import styles from "../styles.module.css";
import Badge from "../../../components/Badge";
import Collections from "../../../assets/icons/Collections";
import Write from "../../../assets/icons/Write";
import Trash from "../../../assets/icons/Trash";
import Dots from "../../../assets/icons/Dots";

const time = ["month", "week", "day"];

const Reports = () => {
  const [active, setActive] = useState("day");
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Grid
        templateColumns={isNotSmallerScreen ? "372px auto" : "auto"}
        gap={6}
        mt="30px"
      >
        {/* sales progress card */}
        <Box
          bg="#FFFFFF"
          borderRadius="12px"
          pl="29px"
          pr="29px"
          pt="23px"
          pb="23px"
        >
          <Flex
            justifyContent={"space-between"}
            alignItems="center"
            alignContent="center"
          >
            <Text fontSize="17px" color="#212121" fontWeight="600">
              Sales Progress
            </Text>
            <Box>
              <Dots />
            </Box>
          </Flex>

          {sales_progress.map((sales) => (
            <Box key={sales.id} mt="23px">
              <Flex>
                <Box
                  bg={sales.bgColor}
                  display="grid"
                  placeItems={"center"}
                  w="40px"
                  h="40px"
                  borderRadius="12px"
                >
                  {sales?.icon}
                </Box>
                <Box ml="14px">
                  <Text color="#000000" fontSize={"13px"} fontWeight="500">
                    {sales.title}
                  </Text>
                  <Text color="#B5B5C3" fontSize="12px" fontWeight="500">
                    {sales.sub_title}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>

        {/* new arrivals card */}
        <Box
          bg="#FFFFFF"
          borderRadius="12px"
          pl="29px"
          pr="29px"
          pt="23px"
          pb="33px"
        >
          <Flex
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
          >
            <Box>
              <Text color="#212121" fontSize="18px" fontWeight="500">
                New Arrivals
              </Text>
              <Text mt="7px" color="#B5B5C3" fontSize="12px" fontWeight="500">
                More than 400+ new members
              </Text>
            </Box>
            <Flex alignItems="center" alignContent="center">
              {time.map((time, id) => (
                <Box
                  key={id}
                  p="10px"
                  bg={active !== time ? null : "#464E5F"}
                  onClick={() => setActive(time)}
                  borderRadius="6px"
                  cursor="pointer"
                >
                  <Text
                    textTransform={"capitalize"}
                    fontSize="12px"
                    fontWeight="600"
                    color={active !== time ? "#B5B5C3" : "#fff"}
                  >
                    {time}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Flex>
          <Box mt="24px">
            <div className={styles.scroll}>
              <table className={styles.arrival_table}>
                <tbody>
                  {new_arrivals.map((arrival) => (
                    <tr key={arrival.id}>
                      <td>
                        <Flex>
                          <Box
                            bg="#F3F6F9"
                            p="4px"
                            borderRadius="6px"
                            w="auto"
                            h="50px"
                            display="flex"
                            placeItems="center"
                          >
                            <Image
                              w="100%"
                              h="auto"
                              borderRadius="6px"
                              src={arrival.image}
                              alt="people"
                            />
                          </Box>
                          <Box ml="15px">
                            <Text
                              fontSize="14px"
                              fontWeight="600"
                              color="#464E5F"
                            >
                              {arrival.name}
                            </Text>
                            <Text
                              color="#B5B5C3"
                              fontSize="13px"
                              fontWeight="500"
                            >
                              <strong style={{ color: "#464E5F" }}>FTP:</strong>{" "}
                              {arrival.email}
                            </Text>
                          </Box>
                        </Flex>
                      </td>
                      <td>
                        <Text
                          fontSize="14px"
                          fontWeight="600"
                          textAlign="right"
                          color="#464E5F"
                        >
                          {arrival.price.amount}
                        </Text>
                        <Text
                          color="#B5B5C3"
                          textTransform={"capitalize"}
                          fontSize="13px"
                          fontWeight="500"
                          textAlign="right"
                        >
                          {arrival.price.status}
                        </Text>
                      </td>
                      <td>
                        <Box ml="50px">
                          {arrival.status === "in progress" ? (
                            <Badge color="#FFA800" bgColor="#FFF4DE">
                              {arrival.status}
                            </Badge>
                          ) : arrival.status === "approved" ? (
                            <Badge bgColor="#EEE5FF" color="#8950FC">
                              {arrival.status}
                            </Badge>
                          ) : arrival.status === "success" ? (
                            <Badge bgColor="#C9F7F5" color="#1BC5BD">
                              {arrival.status}
                            </Badge>
                          ) : (
                            <Badge bgColor="#FED6DA" color="#F64E60">
                              {arrival.status}
                            </Badge>
                          )}
                        </Box>
                      </td>
                      <td>
                        <Flex>
                          <Box
                            display="flex"
                            placeItems="center"
                            bg="#F3F6F9"
                            borderRadius="6px"
                            pr="9.25px"
                            pl="9.25px"
                            w="auto"
                            h="32px"
                            ml="40px"
                            cursor="pointer"
                          >
                            <Collections color="#3699FF" />
                          </Box>
                          <Box
                            display="flex"
                            placeItems="center"
                            bg="#F3F6F9"
                            borderRadius="6px"
                            pr="9.25px"
                            pl="9.25px"
                            w="auto"
                            h="32px"
                            ml="10px"
                            cursor="pointer"
                          >
                            <Write />
                          </Box>
                          <Box
                            display="flex"
                            placeItems="center"
                            bg="#F3F6F9"
                            borderRadius="6px"
                            pr="9.25px"
                            pl="9.25px"
                            w="auto"
                            h="32px"
                            ml="10px"
                            cursor="pointer"
                          >
                            <Trash />
                          </Box>
                        </Flex>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Reports;
