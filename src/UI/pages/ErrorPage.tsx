import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  console.log('error', error);

  return (
    <div>
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <Text as="i">{error?.statusText || error?.message}</Text>
      </Text>
    </div>
  );
};

export default ErrorPage;
