import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { File } from '../../interfaces/File';
import { recentFiles } from '../../../test_data';
import FolderTree from './FolderTree';

const FolderFiles = () => {
  const navigate = useNavigate();
  const { folderId } = useParams();

  console.log('folderId', folderId);

  const organizeFoldersToFiles = (files: File[]) => {
    const files_list: File[] = [];
    const folders_list: File[] = [];
    files.forEach((file) => {
      file.isFolder ? folders_list.push(file) : files_list.push(file);
    });
    return [...folders_list, ...files_list];
  };

  const files = useMemo(
    () => organizeFoldersToFiles(organizeFoldersToFiles(recentFiles)),
    []
  );

  const onDoubleClick = (file: File) => {
    navigate(`/folder/${file.id}`);
  };

  return (
    <FolderTree files={files} heading="Files" onDoubleClick={onDoubleClick} />
  );
};

export default FolderFiles;
