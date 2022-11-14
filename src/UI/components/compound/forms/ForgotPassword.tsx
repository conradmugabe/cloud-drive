import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert({ email });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Flex flexDirection="column" gap={4} pt={10}>
        <Heading size="md" color="blackAlpha.900" fontWeight="medium">
          Forgot your password?
        </Heading>
        <Text fontSize="sm">
          Enter your email address to reset your password. You may need to check
          your spam folder.
        </Text>
        <FormControl>
          <FormLabel fontWeight="medium" color="blackAlpha.700" fontSize="sm">
            Email
          </FormLabel>
          <Input name="email" type="email" value={email} onChange={onChange} />
        </FormControl>
        <Button type="submit" colorScheme="linkedin" alignSelf="flex-end">
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
