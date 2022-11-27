import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { CONTENTS, FOLDERS } from '../../core/constants';
import { FileSystemNode } from '../../core/entities/file.system.node';
import { getFolderContents } from '../../web/api/file.system';
import { useUser } from '../context/user-context';

export const useFolderContents = (
  folderId?: string,
  props?: UseQueryOptions<FileSystemNode[], unknown, FileSystemNode[], string[]>
) => {
  const { user } = useUser();
  const id = folderId ? folderId : user?.id || '';
  return useQuery({
    ...props,
    queryKey: [FOLDERS, CONTENTS, id],
    queryFn: () => getFolderContents(folderId),
  });
};
