import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ForgotPassword from '../components/compound/forms/ForgotPassword';

const ForgotPasswordPage = () => {
  return (
    <Flex flexDirection="column">
      <Flex justifyContent="space-between">
        <Link to="/auth/register">
          <Button variant="link">Sign up</Button>
        </Link>
        <Link to="/auth/login">
          <Button variant="link">Sign in</Button>
        </Link>
      </Flex>
      <ForgotPassword />
    </Flex>
  );
};

export default ForgotPasswordPage;
