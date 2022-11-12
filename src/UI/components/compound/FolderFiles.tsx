import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FSNode } from '../../interfaces/File';
import { recentFiles } from '../../../test_data';
import FolderTree from './FolderTree';
import { Box, Menu } from '@chakra-ui/react';
import ContextMenu from './ContectMenu';
import { useContextMenu } from '../../hooks/useContextMenu';

const FolderFiles = () => {
  const navigate = useNavigate();
  const { x, y, showContextMenu, setCoordinates, setShowContextMenu } =
    useContextMenu();

  const organizeFoldersToFiles = (files: FSNode[]) => {
    const files_list: FSNode[] = [];
    const folders_list: FSNode[] = [];
    files.forEach((file) => {
      const isFolder = file.type === 'folder';
      isFolder ? folders_list.push(file) : files_list.push(file);
    });
    return [...folders_list, ...files_list];
  };

  const files = React.useMemo(
    () => organizeFoldersToFiles(organizeFoldersToFiles(recentFiles)),
    []
  );

  const onDoubleClick = (file: FSNode) => {
    navigate(`/folder/${file.id}`);
  };

  return (
    <Box
      width="full"
      height="100%"
      position="relative"
      overflowX="hidden"
      paddingBottom={20}
      onContextMenu={(e) => {
        e.preventDefault();
        setShowContextMenu(true);
        setCoordinates({ x: e.pageX, y: e.pageY });
      }}
    >
      <Menu isOpen={showContextMenu}>
        <FolderTree
          files={files}
          heading="Files"
          onDoubleClick={onDoubleClick}
        />
        <ContextMenu menuType="general" x={x} y={y} />
      </Menu>
    </Box>
  );
};

export default FolderFiles;
