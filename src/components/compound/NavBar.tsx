import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const menuItems = ['Pricing', 'Docs', 'Blog', 'Support'];

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" px={5} py={2} bgColor="gray.50">
      <Link to="/">
        <Logo />
      </Link>
      <HStack spacing={8}>
        {menuItems.map((item) => (
          <Text _hover={{ borderBottom: '3px solid green', cursor: 'pointer' }}>
            {item}
          </Text>
        ))}
      </HStack>
    </HStack>
  );
};

export default NavBar;
