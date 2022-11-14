import React from 'react';
import { MenuList } from '@chakra-ui/react';
import FileContextMenu from '../common/FileContextMenu';
import FolderContextMenu from '../common/FolderContextMenu';
import GeneralContextMenu from '../common/GeneralContextMenu';

type Props = {
  menuType: string;
  x?: number;
  y?: number;
  showDeleteOption?: boolean;
};

const ContextMenu = ({ menuType, x, y, showDeleteOption }: Props) => {
  let child: React.ReactNode;
  if (menuType === 'folder')
    child = <FolderContextMenu showDeleteOption={showDeleteOption} />;
  else if (menuType)
    child = <FileContextMenu showDeleteOption={showDeleteOption} />;
  else child = <GeneralContextMenu />;

  if (x || y) <MenuList boxShadow="lg">{child}</MenuList>;

  return (
    <MenuList position="absolute" top={y} left={x} boxShadow="lg">
      {child}
    </MenuList>
  );
};

export default ContextMenu;
