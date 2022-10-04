import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import MenuItem from '../../interfaces/Menu';

type Props = { name: string; onSelect: (name: string) => void; item: MenuItem };

const SideMenuItem = ({ name, item, onSelect }: Props) => {
  return (
    <Flex
      alignItems="center"
      gap={5}
      cursor="pointer"
      px={5}
      py={2}
      bgColor={name === item.name ? 'linkedin.100' : ''}
      color={name === item.name ? 'linkedin.600' : ''}
      borderRadius="xl"
      fontWeight="bold"
      _hover={{ color: 'linkedin.600', bgColor: 'linkedin.100' }}
      onClick={() => onSelect(item.name)}
    >
      {item.icon}
      <Text fontSize="sm">{item.name}</Text>
    </Flex>
  );
};

export default SideMenuItem;
