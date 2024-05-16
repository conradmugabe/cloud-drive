import { PropsWithChildren } from 'react';
import { Box, Center, SimpleGrid, Image } from '@chakra-ui/react';
import image from '../../assets/secure_login.svg';

const AuthRootPage = ({ children }: PropsWithChildren) => {
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
          {children}
        </SimpleGrid>
      </Center>
    </>
  );
};

export default AuthRootPage;
