import React from 'react';
import { useNavigate } from 'react-router-dom';
import { File } from '../../interfaces/File';
import { recentFiles } from '../../../test_data';
import FolderTree from './FolderTree';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';

const FolderFiles = () => {
  const navigate = useNavigate();
  // const { folderId } = useParams();
  const { selectedFSNode, setSelectedFSNode } = useSelectedFSNodeFile();

  const organizeFoldersToFiles = (files: File[]) => {
    const files_list: File[] = [];
    const folders_list: File[] = [];
    files.forEach((file) => {
      file.isFolder ? folders_list.push(file) : files_list.push(file);
    });
    return [...folders_list, ...files_list];
  };

  const files = React.useMemo(
    () => organizeFoldersToFiles(organizeFoldersToFiles(recentFiles)),
    []
  );

  const onDoubleClick = (file: File) => {
    navigate(`/folder/${file.id}`);
  };

  const onSingleClick = (file: File) => {
    setSelectedFSNode(file);
  };

  return (
    <FolderTree
      files={files}
      heading="Files"
      selectedFSNode={selectedFSNode}
      onDoubleClick={onDoubleClick}
      onSingleClick={onSingleClick}
    />
  );
};

export default FolderFiles;
