import { File } from './interfaces/File';

export const recentFiles: File[] = [
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
    isFolder: true,
    size: 30000000,
    lastModified: '2019-01-01',
    fileType: '.mkv',
  },
];
