import React from 'react';
import { SimpleGrid, Flex, Heading, Text } from '@chakra-ui/react';
import Login from '../components/compound/forms/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <SimpleGrid>
      <Flex justifyContent="space-between">
        <Heading size="md">Sign in</Heading>
        <Text>
          or{' '}
          <Text as="span">
            <Link to="/auth/register">create an account</Link>
          </Text>
        </Text>
      </Flex>
      <Login />
    </SimpleGrid>
  );
};

export default LoginPage;
