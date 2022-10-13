import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const StorageStats = () => {
  const progress = 75;

  return (
    <Flex
      flexDirection="column"
      gap="5"
      px="5"
      py="10"
      bgColor="white"
      borderRadius="xl"
    >
      <Box height="3" width="20rem" bgColor="linkedin.100" borderRadius="full">
        <Box
          height="3"
          bgColor="linkedin.500"
          width={progress / 100}
          borderRadius="full"
        ></Box>
      </Box>
      <Text fontWeight="bold" fontSize="sm">
        Usage: {(75 / 100) * 200} GB / 200 GB
      </Text>
    </Flex>
  );
};

export default StorageStats;
