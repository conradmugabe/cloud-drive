import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import FileExplorer from '../components/compound/FileExplorer';
import SideNav from '../components/compound/SideNav';

const Dashboard = () => {
  return (
    <HStack height="100vh" align="start" bgColor="whitesmoke" py={2}>
      <VStack width="18%" py={4}>
        <SideNav />
      </VStack>
      <VStack
        width="82%"
        align="start"
        height="full"
        paddingRight="10"
        overflowY="auto"
      >
        <FileExplorer />
      </VStack>
    </HStack>
  );
};

export default Dashboard;
