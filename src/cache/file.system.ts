import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';
import { useUser } from '@context/user.context';
import { useUseCases } from '@context/use.cases.context';
import { FileSystemNode } from '@entities/file.system.node.entity';

export const useFileSystem = () => {
  const FOLDERS = 'folders';
  const CONTENTS = 'contents';
  const queryClient = useQueryClient();
  const { fileSystemUseCases } = useUseCases();
  const { user } = useUser();

  const useFolderContents = (
    folderId?: string,
    props?: UseQueryOptions<
      FileSystemNode[],
      unknown,
      FileSystemNode[],
      string[]
    >
  ) => {
    const id = folderId ? folderId : user?.id || '';
    return useQuery({
      ...props,
      queryKey: [FOLDERS, CONTENTS, id],
      queryFn: () => fileSystemUseCases.getFolderContents({ folderId }),
    });
  };

  const useCreateFolder = () => {
    const { mutate, isLoading, isSuccess } = useMutation({
      mutationFn: fileSystemUseCases.createFolder,
      onSuccess: (data, { parentFolderId }) => {
        const id = parentFolderId ? parentFolderId : user?.id || '';
        const queryKey = [FOLDERS, CONTENTS, id];
        const files = queryClient.getQueryData<FileSystemNode[]>(queryKey);
        const updatedFiles = files ? [...files, data] : [data];
        queryClient.setQueryData(queryKey, updatedFiles);
      },
    });
    return { mutate, isLoading, isSuccess };
  };

  const useDeleteFileSystemNode = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: fileSystemUseCases.deleteFileSystemNode,
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

  const useMoveFolder = () => {
    const queryClient = useQueryClient();
    const { user } = useUser();
    return useMutation({
      mutationFn: fileSystemUseCases.moveFileSystemNode,
      onSuccess(data, { file, parentFolderId }) {
        const currentParent = file.parentFolderId;
        const newParent = parentFolderId ? parentFolderId : user?.id;
        const currentKey = [FOLDERS, CONTENTS, currentParent];
        const newQueryKey = [FOLDERS, CONTENTS, newParent];
        const oldFiles = queryClient.getQueryData<FileSystemNode[]>(currentKey);
        const newFiles =
          queryClient.getQueryData<FileSystemNode[]>(newQueryKey);
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

  const useRenameFileSystem = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: fileSystemUseCases.renameFileSystemNode,
      onSuccess(data) {
        const queryKey = [FOLDERS, CONTENTS, data.parentFolderId];
        const files = queryClient.getQueryData<FileSystemNode[]>(queryKey);
        const updatedFiles = files
          ? files.map((file) => (file.id === data.id ? data : file))
          : [data];
        queryClient.setQueryData(queryKey, updatedFiles);
      },
    });
  };

  return {
    useFolderContents,
    useCreateFolder,
    useDeleteFileSystemNode,
    useMoveFolder,
    useRenameFileSystem,
  };
};
