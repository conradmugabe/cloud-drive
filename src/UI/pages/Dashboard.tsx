import React from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import FileExplorer from '../components/compound/FileExplorer';
import SideNav from '../components/compound/SideNav';

const Dashboard = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <HStack
        height="100vh"
        align="start"
        maxWidth="1400px"
        width="100%"
        bgColor="whitesmoke"
        py={4}
      >
        <VStack width="20%" py={4}>
          <SideNav />
        </VStack>
        <FileExplorer />
      </HStack>
    </Box>
  );
};

export default Dashboard;
