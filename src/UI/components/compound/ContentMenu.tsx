import React from 'react';
import FileContextMenu from '../common/FileContextMenu';
import FolderContextMenu from '../common/FolderContextMenu';
import GeneralContextMenu from '../common/GeneralContextMenu';

type Props = {
  menuType: string;
};

const ContentMenu = ({ menuType }: Props) => {
  switch (menuType) {
    case 'folder':
      return <FolderContextMenu />;

    case 'general':
      return <GeneralContextMenu />;

    default:
      return <FileContextMenu />;
  }
};

export default ContentMenu;
