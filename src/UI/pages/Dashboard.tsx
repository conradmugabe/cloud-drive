import React from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import FileExplorer from '../components/compound/FileExplorer';
import SideNav from '../components/compound/SideNav';

const Dashboard = () => {
  return (
    <Box
    // height="100vh"
    // width="100%"
    // display="flex"
    // alignItems="center"
    // justifyContent="center"
    // overflow="hidden"
    >
      <HStack
        height="100vh"
        align="start"
        bgColor="whitesmoke"
        py={2}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <VStack width="18%" py={4}>
          <SideNav />
        </VStack>
        <VStack
          width="82%"
          align="start"
          position="relative"
          height="full"
          paddingRight="10"
          overflowY="auto"
        >
          <FileExplorer />
        </VStack>
      </HStack>
    </Box>
  );
};

export default Dashboard;
