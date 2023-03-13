import React from 'react';
import { Button, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '@cache/users';
import { useNavigate } from 'react-router-dom';

const LoginWithProvider = () => {
  const { useLoginWithProvider } = useAuth();
  const { mutate, isLoading, isSuccess } = useLoginWithProvider();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSuccess) navigate('/');
  }, [navigate, isSuccess]);

  return (
    <SimpleGrid placeContent="center">
      <Flex
        gap="5"
        alignItems="center"
        as={Button}
        onClick={() => mutate({ provider: 'google' })}
        isLoading={isLoading}
      >
        <Icon as={FcGoogle} boxSize={6} />
        <Text>Login with Google</Text>
      </Flex>
    </SimpleGrid>
  );
};

export default LoginWithProvider;
