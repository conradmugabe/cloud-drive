import React from 'react';
import { Box } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import FolderTree from './FolderTree';
import { useSelectedFSNodeFile } from '@context/selected.fs.node.context';
import { FileSystemNode } from '@entities/file.system.node.entity';
import EmptyFolder from './EmptyFolder';
import { useFileSystem } from '@cache/file.system';
import SkeletonFile from '../common/SkeletonFile';

const FolderFiles = () => {
  const navigate = useNavigate();
  const { folderId } = useParams();
  const { setSelectedFSNode } = useSelectedFSNodeFile();
  const { useFolderContents } = useFileSystem();
  const { data, isLoading } = useFolderContents(folderId);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setSelectedFSNode(null);
  };

  const organizeFoldersToFiles = (files: FileSystemNode[] = []) => {
    const files_list: FileSystemNode[] = [];
    const folders_list: FileSystemNode[] = [];
    files.forEach((file) => {
      const isFolder = file.type === 'folder';
      isFolder ? folders_list.push(file) : files_list.push(file);
    });
    return [...folders_list, ...files_list];
  };

  const files = React.useMemo(
    () => organizeFoldersToFiles(organizeFoldersToFiles(data)),
    [data]
  );

  const onDoubleClick = (file: FileSystemNode) => {
    navigate(`/folder/${file.id}`);
    setSelectedFSNode(null);
  };

  const showEmptyFolder = !isLoading && files.length === 0;

  return (
    <Box
      width="full"
      height="100%"
      overflowX="hidden"
      paddingBottom={20}
      onClick={onClick}
    >
      <FolderTree
        isLoading={isLoading}
        files={files}
        heading="Files"
        onDoubleClick={onDoubleClick}
      />
      {showEmptyFolder && <EmptyFolder />}
    </Box>
  );
};

export default FolderFiles;
