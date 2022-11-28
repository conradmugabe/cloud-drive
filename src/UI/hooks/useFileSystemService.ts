import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';
import { CONTENTS, FOLDERS } from '../../core/constants';
import { FileSystemNode } from '../../core/entities/file.system.node';
import { addFile, addFolder, getFolderContents } from '../../web/api/file.system';
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

export const useAddFolder = () => {
  const queryClient = useQueryClient();
  const { user } = useUser();
  return useMutation({
    mutationFn: addFolder,
    onSuccess(data, { parentFolderId }) {
      const id = parentFolderId ? parentFolderId : user?.id || '';
      const queryKey = [FOLDERS, CONTENTS, id];
      const files = queryClient.getQueryData<FileSystemNode[]>(queryKey);
      const updatedFiles = files ? [...files, data] : [data];
      queryClient.setQueryData(queryKey, updatedFiles);
    },
  });
};

export const useAddFile = () => {
  const queryClient = useQueryClient();
  const { user } = useUser();
  return useMutation({
    mutationFn: addFile,
    onSuccess(data, { parentFolderId }) {
      // const id = parentFolderId ? parentFolderId : user?.id || '';
      // const queryKey = [FOLDERS, CONTENTS, id];
      // const files = queryClient.getQueryData<FileSystemNode[]>(queryKey);
      // const updatedFiles = files ? [...files, data] : [data];
      // queryClient.setQueryData(queryKey, updatedFiles);
    },
  });
};
