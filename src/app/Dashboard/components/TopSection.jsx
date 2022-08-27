import React from "react";
import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import Dots from "../../../assets/icons/Dots";
import styles from "../styles.module.css";

const TopSection = () => {
  return (
    <div>
      <Box mt="30px">
        <Grid templateColumns="repeat(3,1fr)" gap={6}>
          {/* categories card */}
          <Box></Box>
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
              <Text fontSize="17px" color="#464E5F" fontWeight="600">
                Recent Activities
              </Text>
              <Box>
                <Dots />
              </Box>
            </Flex>
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
            >
              <Flex
                justifyContent="space-between"
                alignItems={"center"}
                alignContent="center"
              >
                <Box>icon</Box>
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
                <Box>icon</Box>
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
