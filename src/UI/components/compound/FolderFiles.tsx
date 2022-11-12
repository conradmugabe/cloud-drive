import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FSNode } from '../../interfaces/File';
import { recentFiles } from '../../../test_data';
import FolderTree from './FolderTree';
import { Box } from '@chakra-ui/react';

const FolderFiles = () => {
  const navigate = useNavigate();

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
      onContextMenu={(e) => {
        alert('Clicked General');
      }}
    >
      <FolderTree files={files} heading="Files" onDoubleClick={onDoubleClick} />
    </Box>
  );
};

export default FolderFiles;
