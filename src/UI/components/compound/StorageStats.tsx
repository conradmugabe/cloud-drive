import React from 'react';
import { Progress, Text } from '@chakra-ui/react';
import { useFileSystem } from '@cache/file.system';

const STORAGE_LIMIT = 50000000;
const ONE_MB = 1000000;

function calculateStoragePercentage(
  storageLimit: number,
  totalBytesUsed: number
) {
  const percentageUsed = (totalBytesUsed / storageLimit) * 100;
  return percentageUsed;
}

const StorageStats = () => {
  const { useGetStorage } = useFileSystem();
  const { data: storageUsed, isLoading } = useGetStorage();

  if (storageUsed === undefined || isLoading) return null;

  const percentage = calculateStoragePercentage(STORAGE_LIMIT, storageUsed);

  return (
    <>
      <Progress
        borderRadius="full"
        colorScheme="linkedin"
        value={percentage}
        size="xs"
        bgColor="blackAlpha.300"
      />
      <Text fontSize="xs" textAlign="center">
        Usage: {Math.round(storageUsed / ONE_MB)} MB / 50 MB
      </Text>
    </>
  );
};

export default StorageStats;
