import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

const Register = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const { email, password, firstName, lastName } = values;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((preValues) => ({ ...preValues, [name]: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box as="form">
      <Flex flexDirection="column" gap={5} pt={20}>
        <FormControl>
          <FormLabel fontWeight="bold">First Name</FormLabel>
          <Input
            name="firstName"
            type="text"
            value={firstName}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="bold">Last Name</FormLabel>
          <Input
            name="lastName"
            type="text"
            value={lastName}
            onChange={onChange}
          />
        </FormControl>
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
        <Button colorScheme="linkedin">Create an account</Button>
      </Flex>
    </Box>
  );
};

export default Register;
