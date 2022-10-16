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
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] =
    React.useState(false);
  const { email, password, firstName, lastName, confirmPassword } = values;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((preValues) => ({ ...preValues, [name]: value }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmedPassword = () => {
    setShowConfirmedPassword(!showConfirmedPassword);
  };

  return (
    <Box as="form">
      <Flex flexDirection="column" gap={5} pt={10}>
        <FormControl>
          <FormLabel fontWeight="medium" color="blackAlpha.700" fontSize="sm">
            First Name
          </FormLabel>
          <Input
            name="firstName"
            type="text"
            value={firstName}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="medium" color="blackAlpha.700" fontSize="sm">
            Last Name
          </FormLabel>
          <Input
            name="lastName"
            type="text"
            value={lastName}
            onChange={onChange}
          />
        </FormControl>
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
        <FormControl>
          <FormLabel fontWeight="medium" color="blackAlpha.700" fontSize="sm">
            Confirm Password
          </FormLabel>
          <InputGroup>
            <Input
              name="confirmPassword"
              type={showConfirmedPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={onChange}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={toggleShowConfirmedPassword}
              >
                {showConfirmedPassword ? 'Hide' : 'Show'}
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
