import { requests } from '@config/axiosClient';
import { FileSystemDatabaseService } from '@core/services/file.system.database.service';
import {
  CreateFolder,
  DeleteFileSystemNode,
  GetFolderContents,
} from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';

export class ApiFileSystemDatabaseService implements FileSystemDatabaseService {
  private BASE_URL = 'http://localhost:4000';
  private FILE_SYSTEM_API = '/api/v1/file-system/';
  private FILE_SYSTEM_API_URL = this.BASE_URL + this.FILE_SYSTEM_API;

  getFolderContents = ({
    folderId,
  }: GetFolderContents): Promise<FileSystemNode[]> => {
    const URL = 'folders/contents';
    const FULL_URL = folderId ? URL + `/${folderId}` : URL;
    return requests.get(this.FILE_SYSTEM_API_URL + FULL_URL);
  };

  createFolder = ({
    name,
    parentFolderId,
  }: CreateFolder): Promise<FileSystemNode> => {
    const URL = 'folders';
    return requests.post(this.FILE_SYSTEM_API_URL + URL, {
      name,
      parentFolderId,
    });
  };

  deleteFileSystemNode = ({ id }: DeleteFileSystemNode): Promise<void> =>
    requests.delete(this.FILE_SYSTEM_API_URL + id);

  moveFileSystemNode = ({
    id,
    parentFolderId,
  }: FileSystemDatabaseService.MoveFileSystemNode): Promise<FileSystemNode> => {
    const URL = 'folders/' + id;
    return requests.patch(this.FILE_SYSTEM_API_URL + URL, { parentFolderId });
  };

  renameFileSystemNode = ({
    id,
    name,
  }: FileSystemDatabaseService.RenameFileSystemNode): Promise<FileSystemNode> =>
    requests.patch(this.FILE_SYSTEM_API_URL + id, { name });
}
