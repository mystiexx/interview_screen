import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import { documents } from "../data";
import DownloadIcon from "assets/icons/DownloadIcon";

const Documents = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box p="31px" bg="#fff" borderRadius="12px" mt="24px">
      <Text mb="25px" fontSize="18px" fontWeight="700">
        Uploaded Documents
      </Text>
      <Grid
        templateColumns={isNotSmallerScreen ? "repeat(3,1fr)" : "auto"}
        gap={4}
      >
        {documents.map((data) => (
          <GridItem key={data.id}>
            <Box
              border="1px dashed #F18651"
              borderRadius="8px"
              bg="#FEF3EE"
              p="27px"
              cursor="pointer"
            >
              <Flex>
                <Box
                  bg="#FBE2D6"
                  w="46px"
                  h="46px"
                  borderRadius="8px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                >
                  <DownloadIcon />
                </Box>
                <Box ml="16px">
                  <Text fontSize="18px" fontWeight="600" color="#464E5F">
                    {data.name}
                  </Text>
                  <Text color="#F18651" fontSize="14px" fontWeight="500">
                    Click to download
                  </Text>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Documents;
