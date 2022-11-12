import React from 'react';
import { Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { Feature as IFeature } from '../../interfaces/LandingPage';

type Props = {
  item: IFeature;
};

const Feature = ({ item }: Props) => {
  return (
    <VStack
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.200"
      p={4}
      mt={4}
      bgColor="white"
      gap="2"
    >
      <Icon as={item.icon} h="10" w="10" color="linkedin.500" />
      <Heading fontSize="md" mb={10}>
        {item.title}
      </Heading>
      <Text fontSize={'md'} color="blackAlpha.700" textAlign="center">
        {item.text}
      </Text>
    </VStack>
  );
};

export default Feature;
