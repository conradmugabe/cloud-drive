import React from 'react';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { TbFilePlus, TbFolderPlus, TbPlus } from 'react-icons/tb';

type Props = {
  onOpen: () => void;
};

const AddNew = ({ onOpen }: Props) => {
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
        <MenuItem icon={<TbFolderPlus />} onClick={onOpen}>
          New Folder
        </MenuItem>
        <MenuItem icon={<TbFilePlus />}>Upload File</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AddNew;
