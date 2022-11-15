import React from 'react';
import { MenuList } from '@chakra-ui/react';
import GeneralContextMenu from '../common/GeneralContextMenu';
import FSContextMenu from '../common/FSContextMenu';

type Props = {
  menuType: string;
  x?: number;
  y?: number;
  showDeleteOption?: boolean;
};

const ContextMenu = ({ menuType, x, y, showDeleteOption }: Props) => {
  let child = <GeneralContextMenu />;
  if (menuType) child = <FSContextMenu showDeleteOption={showDeleteOption} />;

  if (x || y) <MenuList boxShadow="lg">{child}</MenuList>;

  return (
    <MenuList top={y} left={x} boxShadow="lg">
      {child}
    </MenuList>
  );
};

export default ContextMenu;
