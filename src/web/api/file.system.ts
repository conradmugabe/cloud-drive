import axios from 'axios';
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

type MoveFolderRequest = { file: FileSystemNode; parentFolderId?: string };

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

export const addFile = async ({ file }: AddFileRequest) => {
  const { signedUrl } = await getUploadKey();
  // Check out the next two lines to see which one works.
  // They are both the same lines. But the previous implementation seemed to have worked in the past
  await axios.put(signedUrl, file, { headers: { 'Content-Type': file.type } });
  // const res = await uploadFile(signedUrl, file);
  // console.log('aws response', res);
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
  file,
  parentFolderId,
}: MoveFolderRequest): Promise<FileSystemNode> => {
  const { id } = file;
  const URL = 'folders/' + id;
  return requests.patch(FILE_SYSTEM_API_URL + URL, { parentFolderId });
};
