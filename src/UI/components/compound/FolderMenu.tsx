import React from 'react';
import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';

const FolderMenu = () => {
  return (
    <MenuList>
      <MenuItem>Folder</MenuItem>
      <MenuItem>Payments </MenuItem>
      <MenuDivider />
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuList>
  );
};

export default FolderMenu;
