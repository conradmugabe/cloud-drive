import { Box, Skeleton } from '@chakra-ui/react';

function SkeletonFile() {
  return (
    <Box borderRadius="lg" boxShadow="lg" bg="white" py="2.5" px="5">
      <Skeleton height="30px" />
    </Box>
  );
}

export default SkeletonFile;
