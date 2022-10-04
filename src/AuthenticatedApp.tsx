import React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import FileExplorer from './components/compound/FileExplorer';
import SideNav from './components/compound/SideNav';

const AuthenticatedApp = () => {
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
      >
        <VStack width="20%">
        <SideNav />
        </VStack>
        <FileExplorer />
      </HStack>
    </Box>
  );
};

export default AuthenticatedApp;
