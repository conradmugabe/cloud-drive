import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import MenuItem from '../../interfaces/Menu';

type Props = { name: string; onSelect: (name: string) => void; item: MenuItem };

const SideMenuItem = ({ name, item, onSelect }: Props) => {
  const isSelected = name === item.value;
  return (
    <Flex
      alignItems="center"
      gap={5}
      cursor="pointer"
      px={5}
      py={2}
      bgColor={isSelected ? 'linkedin.100' : ''}
      color={isSelected ? 'linkedin.600' : ''}
      borderRadius="xl"
      fontWeight="bold"
      _hover={{ bgColor: `${!isSelected && 'blackAlpha.200'}` }}
      onClick={() => onSelect(item.value)}
    >
      {item.icon}
      <Text fontSize="sm">{item.name}</Text>
    </Flex>
  );
};

export default SideMenuItem;
