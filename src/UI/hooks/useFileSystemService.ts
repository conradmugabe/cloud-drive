import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';
import { CONTENTS, FOLDERS } from '../../core/constants';
import { FileSystemNode } from '../../core/entities/file.system.node';
import {
  addFile,
  addFolder,
  deleteFileSystemNode,
  getFolderContents,
  moveFolder,
  renameFileSystemNode,
} from '../../web/api/file.system';
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

export const useDeleteFileSystemNode = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteFileSystemNode,
    onSuccess(_, variables) {
      const id = variables.parentFolderId;
      const queryKey = [FOLDERS, CONTENTS, id];
      const files = queryClient.getQueryData<FileSystemNode[]>(queryKey);
      const updatedFiles = files
        ? files.filter((file) => file.id !== variables.id)
        : [];
      queryClient.setQueryData(queryKey, updatedFiles);
    },
  });
};

export const useRenameFileSystem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: renameFileSystemNode,
    onSuccess(data) {
      const id = data.parentFolderId;
      const queryKey = [FOLDERS, CONTENTS, id];
      const files = queryClient.getQueryData<FileSystemNode[]>(queryKey);
      const updatedFiles = files
        ? files.map((file) => (file.id === data.id ? data : file))
        : [data];
      queryClient.setQueryData(queryKey, updatedFiles);
    },
  });
};

export const useMoveFolder = () => {
  const queryClient = useQueryClient();
  const { user } = useUser();
  return useMutation({
    mutationFn: moveFolder,
    onSuccess(data, { file, parentFolderId }, context) {
      const currentParent = file.parentFolderId;
      const newParent = parentFolderId ? parentFolderId : user?.id;
      const currentKey = [FOLDERS, CONTENTS, currentParent];
      const newQueryKey = [FOLDERS, CONTENTS, newParent];
      const oldFiles = queryClient.getQueryData<FileSystemNode[]>(currentKey);
      const newFiles = queryClient.getQueryData<FileSystemNode[]>(newQueryKey);
      const oldFilesUpdate = oldFiles
        ? oldFiles.filter((file) => file.id !== data.id)
        : [];
      const newFilesUpdate = newFiles
        ? newFiles.map((file) => (file.id === data.id ? data : file))
        : [];
      queryClient.setQueryData(currentKey, oldFilesUpdate);
      queryClient.setQueryData(newQueryKey, newFilesUpdate);
    },
  });
};
