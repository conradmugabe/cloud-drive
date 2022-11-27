import { API_URL } from '../../core/constants';
import { FileSystemNode } from '../../core/entities/file.system.node';
import { requests } from '../apiClient';

type AddFolderRequest = {
  name: string;
  parentFolderId?: string;
};

export const getFolderContents = async (
  folderId?: string
): Promise<FileSystemNode[]> => {
  const URL = 'folders/contents';
  const FULL_URL = folderId ? URL + `/${folderId}` : URL;
  return requests.get(API_URL + FULL_URL);
};

export const addFolder = async ({
  name,
  parentFolderId,
}: AddFolderRequest): Promise<FileSystemNode> => {
  const URL = 'folders';
  return requests.post(API_URL + URL, { name, parentFolderId });
};
