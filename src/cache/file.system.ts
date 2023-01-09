import { useQuery } from '@tanstack/react-query';
import { useUser } from '@context/user.context';
import { useUseCases } from '@context/use.cases.context';

export const useFileSystem = () => {
  const FOLDERS = 'folders';
  const CONTENTS = 'contents';
  const { fileSystemUseCases } = useUseCases();
  const { user } = useUser();

  const useFolderContents = (folderId?: string) => {
    const { user } = useUser();
    const id = folderId ? folderId : user?.id || '';
    return useQuery({
      queryKey: [FOLDERS, CONTENTS, id],
      queryFn: () => fileSystemUseCases.getFolderContents({ folderId }),
    });
  };

  return { useFolderContents };
};
