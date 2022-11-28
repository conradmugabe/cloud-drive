import { FILE_SYSTEM_API_URL } from '../../core/constants';
import { FileSystemNode } from '../../core/entities/file.system.node';
import { requests } from '../apiClient';
import { getUploadKey, uploadFile } from './file.upload';

type AddFolderRequest = {
  name: string;
  parentFolderId?: string;
};

type AddFileRequest = { file: File } & AddFolderRequest;

type RenameFileSystemNodeRequest = { id: string; name: string };

type MoveFolderRequest = { id: string };

export const getFolderContents = async (
  folderId?: string
): Promise<FileSystemNode[]> => {
  const URL = 'folders/contents';
  const FULL_URL = folderId ? URL + `/${folderId}` : URL;
  return requests.get(FILE_SYSTEM_API_URL + FULL_URL);
};

export const addFolder = async ({
  name,
  parentFolderId,
}: AddFolderRequest): Promise<FileSystemNode> => {
  const URL = 'folders';
  return requests.post(FILE_SYSTEM_API_URL + URL, { name, parentFolderId });
};

export const addFile = async (data: AddFileRequest) => {
  const response = await getUploadKey();
  const res = await uploadFile(response.signedUrl, data.file);
  console.log('aws response', res);
  return;
};

export const deleteFileSystemNode = async (
  fileSystemNode: FileSystemNode
): Promise<void> => {
  const { id } = fileSystemNode;
  return requests.delete(FILE_SYSTEM_API_URL + id);
};

export const renameFileSystemNode = async ({
  id,
  name,
}: RenameFileSystemNodeRequest): Promise<FileSystemNode> => {
  return requests.patch(FILE_SYSTEM_API_URL + id, { name });
};

export const moveFolder = async ({
  id,
}: MoveFolderRequest): Promise<FileSystemNode> => {
  const URL = 'folders/' + id;
  return requests.patch(FILE_SYSTEM_API_URL + URL, {});
};
