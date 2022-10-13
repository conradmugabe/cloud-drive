import React from 'react';
import { SimpleGrid, Box, Center } from '@chakra-ui/react';
import Login from '../components/compound/forms/Login';

const LoginPage = () => {
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
          <Login />
        </SimpleGrid>
      </Center>
    </>
  );
};

export default LoginPage;
