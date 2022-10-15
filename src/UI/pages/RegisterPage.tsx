import React from 'react';
import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Register from '../components/compound/forms/Register';

const RegisterPage = () => {
  return (
    <SimpleGrid>
      <Flex justifyContent="space-between">
        <Heading size="md">Sign up</Heading>
        <Text>
          or{' '}
          <Text as="span">
            <Link to="/auth/login">login</Link>
          </Text>
        </Text>
      </Flex>
      <Register />
    </SimpleGrid>
  );
};

export default RegisterPage;
