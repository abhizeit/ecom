import { Box, Skeleton, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Box padding={16} w="90%" margin="auto">
      <SimpleGrid columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }} spacing={16}>
        <Skeleton
          height={{ xs: "300px", sm: "300px", md: "400px", lg: "400px" }}
        />
        <Skeleton
          height={{ xs: "300px", sm: "300px", md: "400px", lg: "400px" }}
        />
        <Skeleton
          height={{ xs: "300px", sm: "300px", md: "400px", lg: "400px" }}
        />
        <Skeleton
          height={{ xs: "300px", sm: "300px", md: "400px", lg: "400px" }}
        />
        <Skeleton
          height={{ xs: "300px", sm: "300px", md: "400px", lg: "400px" }}
        />
        <Skeleton
          height={{ xs: "300px", sm: "300px", md: "400px", lg: "400px" }}
        />
      </SimpleGrid>
    </Box>
  );
};

export default LoadingSkeleton;
