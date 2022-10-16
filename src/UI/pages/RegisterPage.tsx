import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Register from '../components/compound/forms/Register';

const RegisterPage = () => {
  return (
    <Flex flexDirection="column">
      <Flex justifyContent="space-between">
        <Heading size="md">Sign up</Heading>
        <Text>
          or{' '}
          <Text
            as="span"
            color="linkedin.700"
            _hover={{ textDecoration: 'underline' }}
          >
            <Link to="/auth/login">login</Link>
          </Text>
        </Text>
      </Flex>
      <Register />
    </Flex>
  );
};

export default RegisterPage;
