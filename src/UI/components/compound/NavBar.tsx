import React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';
import { useUser } from '@context/user.context';
import { useAuth } from '@cache/users';

const menuItems = ['Pricing', 'Docs', 'Blog', 'Support'];

const NavBar = () => {
  const { useLogout } = useAuth();
  const { mutate, isLoading, isSuccess } = useLogout();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSuccess) {
      setUser(null);
      navigate('/');
    }
  }, [isSuccess, navigate, setUser]);

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
        <Button
          colorScheme="linkedin"
          onClick={() => mutate()}
          isLoading={isLoading}
        >
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
