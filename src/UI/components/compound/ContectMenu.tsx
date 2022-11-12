import React from 'react';
import { MenuList } from '@chakra-ui/react';
import FileContextMenu from '../common/FileContextMenu';
import FolderContextMenu from '../common/FolderContextMenu';
import GeneralContextMenu from '../common/GeneralContextMenu';

type Props = {
  menuType: string;
  x: number;
  y: number;
};

const ContextMenu = ({ menuType, x, y }: Props) => {
  let child;
  switch (menuType) {
    case 'folder':
      child = <FolderContextMenu />;
      break;

    case 'general':
      child = <GeneralContextMenu />;
      break;

    default:
      child = <FileContextMenu />;
      break;
  }
  return (
    <MenuList position="absolute" top={y} left={x}>
      {child}
    </MenuList>
  );
};

export default ContextMenu;
