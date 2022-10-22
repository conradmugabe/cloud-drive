import React from 'react';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';
import { File as IFile } from '../../interfaces/File';
import FolderTree from './FolderTree';

const RecentFiles = () => {
  const { selectedFSNode, setSelectedFSNode } = useSelectedFSNodeFile();

  const onSingleClick = (file: IFile) => {
    setSelectedFSNode(file);
  };

  const recentFiles: IFile[] = [
    {
      id: '10',
      name: 'End of year report 2020',
      isFolder: false,
      size: 150000,
      lastModified: '2020-01-01',
      fileType: '.pdf',
    },
    {
      id: '20',
      name: 'End of year report 2019',
      isFolder: false,
      size: 150000,
      lastModified: '2019-01-01',
      fileType: '.pdf',
    },
    {
      id: '30',
      name: 'End of year report 2019',
      isFolder: false,
      size: 150000,
      lastModified: '2019-01-01',
      fileType: '.txt',
    },
    {
      id: '40',
      name: 'Moments 2020',
      isFolder: false,
      size: 30000000,
      lastModified: '2019-01-01',
      fileType: '.mkv',
    },
  ];

  return (
    <FolderTree
      onDoubleClick={(file) => alert('file: ' + file.id)}
      files={recentFiles}
      heading="Recent Files"
      showSearchBar={false}
      onSingleClick={onSingleClick}
      selectedFSNode={selectedFSNode}
    />
  );
};

export default RecentFiles;
