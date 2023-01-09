import React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';
import { useUser } from '@context/user.context';

const menuItems = ['Pricing', 'Docs', 'Blog', 'Support'];

const NavBar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <HStack
      justifyContent="space-between"
      px={5}
      py={2}
      bgColor="gray.50"
      position="sticky"
      top="0"
      zIndex="1"
      onContextMenu={(e) => e.preventDefault()}
    >
      <Link to="/">
        <Logo />
      </Link>
      {user ? (
        <Button colorScheme="linkedin" onClick={handleLogout}>
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
