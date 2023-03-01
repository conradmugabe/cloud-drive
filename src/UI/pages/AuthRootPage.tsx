import React from 'react';
import { Box, Center, SimpleGrid, Image } from '@chakra-ui/react';
import image from '../../assets/secure_login.svg';
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
          <Box w="100%" h="100%" display="grid" placeContent="center">
            <Image src={image} />
          </Box>
          <Outlet />
        </SimpleGrid>
      </Center>
    </>
  );
};

export default AuthRootPage;
