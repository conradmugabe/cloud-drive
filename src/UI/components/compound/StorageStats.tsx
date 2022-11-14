import React from 'react';
import { Progress, Text } from '@chakra-ui/react';

const StorageStats = () => {
  const progress = 70;
  return (
    <>
      <Progress
        borderRadius="full"
        colorScheme="linkedin"
        value={progress}
        size="xs"
        bgColor="blackAlpha.300"
      />
      <Text fontSize="xs" textAlign="center">
        Usage: {(progress / 100) * 200} GB / 200 GB
      </Text>
    </>
  );
};

export default StorageStats;
