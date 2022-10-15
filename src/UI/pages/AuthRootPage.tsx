import React from 'react';
import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const AuthRootPage = () => {
  return (
    <>
      <Center>
        <SimpleGrid
          columns={2}
          gap={5}
          maxW="7xl"
          w="100%"
          paddingInline="48"
          h="80vh"
        >
          <Box w="100%" h="100%" bgColor="blue.100"></Box>
          <Outlet />
        </SimpleGrid>
      </Center>
    </>
  );
};

export default AuthRootPage;
