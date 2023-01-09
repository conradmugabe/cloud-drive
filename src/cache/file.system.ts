import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@context/user.context';
import { useUseCases } from '@context/use.cases.context';
import { FileSystemNode } from '@entities/file.system.node.entity';

export const useFileSystem = () => {
  const FOLDERS = 'folders';
  const CONTENTS = 'contents';
  const queryClient = useQueryClient();
  const { fileSystemUseCases } = useUseCases();
  const { user } = useUser();

  const useFolderContents = (folderId?: string) => {
    const id = folderId ? folderId : user?.id || '';
    const { data, error, isLoading } = useQuery({
      queryKey: [FOLDERS, CONTENTS, id],
      queryFn: () => fileSystemUseCases.getFolderContents({ folderId }),
    });
    return { data, error, isLoading };
  };

  const useCreateFolder = () => {
    const { mutate } = useMutation({
      mutationFn: fileSystemUseCases.createFolder,
      onSuccess: (data, { parentFolderId }) => {
        const id = parentFolderId ? parentFolderId : user?.id || '';
        const queryKey = [FOLDERS, CONTENTS, id];
        const files = queryClient.getQueryData<FileSystemNode[]>(queryKey);
        const updatedFiles = files ? [...files, data] : [data];
        queryClient.setQueryData(queryKey, updatedFiles);
      },
    });
    return {};
  };

  return { useFolderContents, useCreateFolder };
};
