import { API_URL } from '../../core/constants';
import { FileSystemNode } from '../../core/entities/file.system.node';
import { requests } from '../apiClient';

export const getFolderContents = async (
  folderId?: string
): Promise<FileSystemNode[]> => {
  const URL = 'folders/contents';
  const FULL_URL = folderId ? URL + `/${folderId}` : URL;
  return requests.get(API_URL + FULL_URL);
};
