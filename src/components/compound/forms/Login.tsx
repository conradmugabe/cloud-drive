import React, { ChangeEvent } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

const Login = () => {
  const [values, setValues] = React.useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = React.useState(false);
  const { email, password } = values;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginUser = () => {};

  return (
    <Box as="form" onSubmit={handleLoginUser}>
      <Flex flexDir="column" gap={5} pt={20}>
        <FormControl>
          <FormLabel fontWeight="bold">Email address</FormLabel>
          <Input name="email" type="email" value={email} onChange={onChange} />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold">Password</FormLabel>
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
          <Text cursor="pointer" _hover={{ textDecoration: 'underline', color: "linkedin" }}>
            Forgot password?
          </Text>
          <Button colorScheme="linkedin">Sign In</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Login;
