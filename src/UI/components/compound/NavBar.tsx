import React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { useUser } from '../../context/user-context';

const menuItems = ['Pricing', 'Docs', 'Blog', 'Support'];

const NavBar = () => {
  const user = useUser();

  return (
    <HStack justifyContent="space-between" px={5} py={2} bgColor="gray.50">
      <Link to="/">
        <Logo />
      </Link>
      {user?.user ? (
        <Button colorScheme="linkedin" onClick={() => user.setUser(null)}>
          Logout
        </Button>
      ) : (
        <HStack spacing={8}>
          {menuItems.map((item) => (
            <Text
              key={item}
              _hover={{ borderBottom: '3px solid green', cursor: 'pointer' }}
            >
              {item}
            </Text>
          ))}
        </HStack>
      )}
    </HStack>
  );
};

export default NavBar;
