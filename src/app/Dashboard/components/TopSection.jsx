import React from "react";
import { Box, Grid, Text, Flex, useMediaQuery, Button } from "@chakra-ui/react";
import Dots from "../../../assets/icons/Dots";
import styles from "../styles.module.css";
import Blocks from "../../../assets/icons/Blocks";
import Cart from "../../../assets/icons/Cart";
import Equalizer from "../../../assets/icons/Equalizer";
import NewUser from "../../../assets/icons/NewUser";
import Compile from "../../../assets/icons/Compile";
import Bug from "../../../assets/icons/Bug";
import Timeline from './Timeline'

const TopSection = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      <Box mt="30px">
        <Grid
          templateColumns={isNotSmallerScreen ? "repeat(3,1fr)" : "auto"}
          gap={6}
        >
          {/* categories card */}
          <Box bg="#FFFFFF" borderRadius="12px">
            <Box className={styles.inner_card} pl="29px" pr="29px" pt="27px">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                alignContent="center"
              >
                <Text
                  textTransform="capitalize"
                  color="#fff"
                  fontSize="17px"
                  fontWeight="600"
                >
                  categories
                </Text>
                <Button
                  bg="#F76373"
                  // opacity="0.12"
                  color="#fff"
                  fontSize="11px"
                  fontWeight={"600"}
                >
                  <Text color="#fff"> Export</Text>
                </Button>
              </Flex>
            </Box>
            <Box pl="29px" pr="29px" pt="23px" pb="33px" mt="-90px">
              <Grid templateColumns="repeat(2,1fr)" gap={2}>
                <Box
                  bg="#FFF4DE"
                  borderRadius="12px"
                  pt="30px"
                  pl="15px"
                  pb="27px"
                >
                  <Equalizer />
                  <Text color="#634100" fontSize="14px" fontWeight="500">
                    Weekly Sales
                  </Text>
                </Box>

                <Box
                  bg="#EEE5FF"
                  borderRadius="12px"
                  pt="30px"
                  pl="15px"
                  pb="27px"
                >
                  <NewUser />
                  <Text color="#8A50FC" fontSize="14px" fontWeight="500">
                    New Users
                  </Text>
                </Box>
                <Box
                  bg="#FFE2E6"
                  borderRadius="12px"
                  pt="30px"
                  pl="15px"
                  pb="27px"
                >
                  <Compile />
                  <Text color="#F65464" fontSize="14px" fontWeight="500">
                    Item Orders
                  </Text>
                </Box>

                <Box
                  bg="#C9F7F5"
                  borderRadius="12px"
                  pt="30px"
                  pl="15px"
                  pb="27px"
                >
                  <Bug />
                  <Text color="#74BBB7" fontSize="14px" fontWeight="500">
                    Bug Reports
                  </Text>
                </Box>
              </Grid>
            </Box>
          </Box>

          {/* recent activities card */}
          <Box
            bg="#FFFFFF"
            borderRadius="12px"
            pl="29px"
            pr="29px"
            pt="23px"
            pb="33px"
          >
            {" "}
            <Flex
              justifyContent={"space-between"}
              alignItems="center"
              alignContent="center"
            >
              <Box>
              <Text fontSize="17px" color="#464E5F" fontWeight="600">
                Recent Activities
              </Text>
              <Text fontSize='12px' fontWeight='500' color='#80808F'>890,344 Sales</Text>
              </Box>
            
              <Box>
                <Dots />
              </Box>
            </Flex>
            <Box>
              <Timeline />
            </Box>
          </Box>

          {/* summary cards */}
          <Box>
            {/* first card */}
            <Box
              className={styles.first_card}
              borderRadius="12px"
              height="235px"
              pt="30px"
              pl="30px"
              pr="29px"
              w="auto"
            >
              <Flex
                justifyContent="space-between"
                alignItems={"center"}
                alignContent="center"
              >
                <Box
                  w="50px"
                  h="50px"
                  bg="#C9F7F5"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="9px"
                >
                  <Blocks />
                </Box>
                <Box>
                  <Text
                    fontSize="24px"
                    fontWeight="600"
                    color="#464E5F"
                    textAlign="right"
                  >
                    $750
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="#B5B5C3"
                    textAlign={"right"}
                  >
                    Weekly Income
                  </Text>
                </Box>
              </Flex>
            </Box>

            {/* second card */}
            <Box
              className={styles.second_card}
              borderRadius="12px"
              height="235px"
              pt="30px"
              pl="30px"
              pr="29px"
              mt="30px"
            >
              <Flex
                justifyContent="space-between"
                alignItems={"center"}
                alignContent="center"
              >
                <Box
                  w="50px"
                  h="50px"
                  bg="#E1F0FF"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="9px"
                >
                  <Cart />
                </Box>
                <Box>
                  <Text
                    fontSize="24px"
                    fontWeight="600"
                    color="#464E5F"
                    textAlign="right"
                  >
                    +259
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="#B5B5C3"
                    textAlign={"right"}
                  >
                    Sales Change
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default TopSection;
