import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { Link, useNavigate, redirect } from 'react-router-dom';
import { QueryCache } from '@tanstack/react-query';
import Logo from '../common/Logo';
import { useUser } from '@context/user.context';
import { useAuth } from '@cache/users';

const NavBar = () => {
  const { useLogout } = useAuth();
  const { mutate, isLoading, isSuccess } = useLogout();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const logout = () => {
    mutate();
    redirect('/');
    const queryCache = new QueryCache();
    queryCache.clear();
    return;
  };

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
        <Button colorScheme="linkedin" onClick={logout} isLoading={isLoading}>
          Logout
        </Button>
      ) : (
        <Link to="/auth/login">
          <Button alignSelf="flex-start" colorScheme="linkedin">
            Try Cloud Drive
          </Button>
        </Link>
      )}
    </HStack>
  );
};

export default NavBar;
