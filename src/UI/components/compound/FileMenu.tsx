import React from 'react';
import { MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';

const FileMenu = () => {
  return (
    <MenuList>
      <MenuItem>File</MenuItem>
      <MenuItem>Payments </MenuItem>
      <MenuDivider />
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuList>
  );
};

export default FileMenu;
