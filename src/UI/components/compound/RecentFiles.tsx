import React from 'react';
import { File as IFile } from '../../interfaces/File';
import FolderTree from './FolderTree';

const RecentFiles = () => {
  const recentFiles: IFile[] = [
    {
      id: '1',
      name: 'End of year report 2020',
      isFolder: false,
      size: 150000,
      lastModified: '2020-01-01',
      fileType: '.pdf',
    },
    {
      id: '2',
      name: 'End of year report 2019',
      isFolder: false,
      size: 150000,
      lastModified: '2019-01-01',
      fileType: '.pdf',
    },
    {
      id: '3',
      name: 'End of year report 2019',
      isFolder: false,
      size: 150000,
      lastModified: '2019-01-01',
      fileType: '.txt',
    },
    {
      id: '4',
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
    />
  );
};

export default RecentFiles;
