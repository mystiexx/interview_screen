import React from "react";
import { Box } from "@chakra-ui/react";

const ProgressBar = ({ length }) => {
  return (
    <Box h="5px"  bg={
        length === 0 || length <= 20
          ? "#D7F9EF"
          : length <= 50
          ? "#EEE5FF"
          : length <= 70
          ? "#FEE7DD"
          : "#FFE2E5"
      } borderRadius="5px" w="100%">
      <Box
        h="100%"
        w={`${length}%`}
        bg={
          length === 0 || length <= 20
            ? "#0BB783"
            : length <= 50
            ? "#8950FC"
            : length <= 70
            ? "#EF6327"
            : "#F64E60"
        }
        borderRadius="5px"
      ></Box>
    </Box>
  );
};

export default ProgressBar;
