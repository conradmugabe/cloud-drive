import React from 'react';
import { Center, Text, VStack } from '@chakra-ui/react';
import FillContainer from '../common/FillContainer';
import Logo from '../common/Logo';

const EmptyFolder = () => {
  return (
    <FillContainer>
      <Center height="70vh">
        <VStack
          justifyContent="center"
          bgColor="blackAlpha.100"
          height="400px"
          width="400px"
          borderRadius="50%"
          padding={10}
          spacing="5"
        >
          <Logo size={180} color="blackAlpha.500" />
          <VStack spacing="2">
            <Text fontSize="lg">Empty Folder</Text>
            <Text fontSize="sm">Add new file or folder with "New" Button</Text>
          </VStack>
        </VStack>
      </Center>
    </FillContainer>
  );
};

export default EmptyFolder;
