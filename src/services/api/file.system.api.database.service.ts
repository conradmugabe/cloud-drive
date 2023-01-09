import { requests } from '@config/axiosClient';
import { FileSystemDatabaseService } from '@core/services/file.system.database.service';
import { GetFolderContents } from '@dto/file.system.node.dto';
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
}
