import React from 'react';
import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FSNode } from '../../interfaces/File';
import { recentFiles } from '../../../test_data';
import FolderTree from './FolderTree';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';

const FolderFiles = () => {
  const navigate = useNavigate();
  const { setSelectedFSNode } = useSelectedFSNodeFile();
  const [clickedChild, setClickedChild] = React.useState(false);

  const handleClickedChild = () => {
    setClickedChild(true);
  };

  const onClick = () => {
    setClickedChild(false);
    setSelectedFSNode(null);
  };

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
      onClick={onClick}
    >
      <FolderTree
        files={files}
        heading="Files"
        onDoubleClick={onDoubleClick}
        handleClickedChild={handleClickedChild}
      />
    </Box>
  );
};

export default FolderFiles;
