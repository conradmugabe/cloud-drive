import React from 'react';
import { IconButton, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { TbPlus } from 'react-icons/tb';
import GeneralContextMenu from '../common/GeneralContextMenu';

const AddNew = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        colorScheme="facebook"
        aria-label="Add New Folder Or File"
        position="fixed"
        bottom="10"
        right="16"
        borderRadius="full"
        boxShadow="xl"
        size="lg"
        icon={<TbPlus />}
      >
        Actions
      </MenuButton>
      <MenuList>
        <GeneralContextMenu />
      </MenuList>
    </Menu>
  );
};

export default AddNew;
