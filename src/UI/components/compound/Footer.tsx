import React from 'react';
import { Center, HStack, Text } from '@chakra-ui/react';
import Logo from '../common/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Center width="100%" bgColor="gray.50" py="6">
      <HStack
        px={5}
        py={2}
        spacing={10}
        maxW="7xl"
        width="100%"
        justifyContent="space-between"
      >
        <HStack spacing={5}>
          <Logo color="blackAlpha.600" />
          <Text color="blackAlpha.600">Cloud Drive &copy; {currentYear}</Text>
        </HStack>
        <HStack spacing={5}>
          <Text color="blackAlpha.600" fontSize="xl">
            Privacy
          </Text>
          <Text color="blackAlpha.600" fontSize="xl">
            Terms
          </Text>
        </HStack>
      </HStack>
    </Center>
  );
};

export default Footer;
