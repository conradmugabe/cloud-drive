import React from 'react';
import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  console.log('error', error);

  return (
    <Center height="100vh">
      <VStack>
        <Heading>Oops!</Heading>
        <Text>Sorry, an unexpected error has occurred.</Text>
        <Text>
          <Text as="i">{error?.statusText || error?.message}</Text>
        </Text>
      </VStack>
    </Center>
  );
};

export default ErrorPage;
