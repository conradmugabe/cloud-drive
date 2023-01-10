import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useUser } from '@context/user.context';
import { Link, useNavigate } from 'react-router-dom';
import LoginWithProvider from './LoginWithProvider';
import { useAuth } from '@cache/users';

const Login = () => {
  const { useLogin } = useAuth();
  const { mutate, isLoading, isSuccess } = useLogin();
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [values, setValues] = React.useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = React.useState(false);
  const { email, password } = values;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginUser = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };

  React.useEffect(() => {
    if (isSuccess) navigate('/');
  });

  return (
    <Box as="form" onSubmit={handleLoginUser}>
      <Flex flexDir="column" gap={5} pt={10}>
        <FormControl>
          <FormLabel fontWeight="medium" color="blackAlpha.700" fontSize="sm">
            Email address
          </FormLabel>
          <Input name="email" type="email" value={email} onChange={onChange} />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="medium" color="blackAlpha.700" fontSize="sm">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={onChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={toggleShowPassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Flex alignItems="center" justifyContent="space-between">
          <Text
            cursor="pointer"
            _hover={{ textDecoration: 'underline', color: 'linkedin' }}
          >
            <Link to="/auth/forgot_password">Forgot password?</Link>
          </Text>
          <Button colorScheme="linkedin" type="submit" isLoading={isLoading}>
            Sign In
          </Button>
        </Flex>
        <LoginWithProvider />
      </Flex>
    </Box>
  );
};

export default Login;
