import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Login from '../components/compound/forms/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Flex flexDirection="column">
      <Flex justifyContent="space-between">
        <Heading size="md">Sign in</Heading>
        <Text>
          or{' '}
          <Text
            as="span"
            color="linkedin.700"
            _hover={{ textDecoration: 'underline' }}
          >
            <Link to="/auth/register">create an account</Link>
          </Text>
        </Text>
      </Flex>
      <Login />
    </Flex>
  );
};

export default LoginPage;
