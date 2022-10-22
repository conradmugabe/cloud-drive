import React from 'react';
import { useSelectedFSNodeFile } from '../../context/selected-fs-node-context';
import { FSNode } from '../../interfaces/File';
import FolderTree from './FolderTree';

const RecentFiles = () => {
  const { selectedFSNode, setSelectedFSNode } = useSelectedFSNodeFile();

  const recentFiles: FSNode[] = [
    {
      id: '10',
      name: 'End of year report 2020',
      size: 150000,
      updatedAt: '2020-01-01',
      createdAt: '2020-01-02',
      createdBy: '1',
      ownedBy: '1',
      parentFolder: '2',
      path: '1/1',
      type: 'pdf',
    },
    {
      id: '20',
      name: 'End of year report 2019',
      size: 150000,
      updatedAt: '2019-01-01',
      createdAt: '2020-01-02',
      createdBy: '1',
      ownedBy: '1',
      parentFolder: '2',
      path: '1/2',
      type: 'pdf',
    },
    {
      id: '30',
      name: 'End of year report 2019',
      size: 150000,
      updatedAt: '2019-01-01',
      createdAt: '2020-01-02',
      createdBy: '1',
      ownedBy: '1',
      parentFolder: '2',
      path: '1/3',
      type: 'txt',
    },
    {
      id: '40',
      name: 'Moments 2021',
      size: 30000000,
      updatedAt: '2019-01-01',
      createdAt: '2020-01-02',
      createdBy: '1',
      ownedBy: '1',
      parentFolder: '2',
      path: '1/4',
      type: 'xlsx',
    },
  ];

  return (
    <FolderTree
      onDoubleClick={(file) => alert('file: ' + file.id)}
      files={recentFiles}
      heading="Recent Files"
      showSearchBar={false}
      setSelectedFSNode={setSelectedFSNode}
      selectedFSNode={selectedFSNode}
    />
  );
};

export default RecentFiles;
