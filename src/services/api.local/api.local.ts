import { FileSystemDatabaseService } from '@core/services/file.system.database.service';
import { CreateFolder, GetFolderContents } from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';
import { FileSystemDbService } from './services/file.system.db.service';

export class ApiLocal implements FileSystemDatabaseService {
  constructor(private databaseService: FileSystemDbService) {}

  getFolderContents = async (
    props: GetFolderContents
  ): Promise<FileSystemNode[]> => this.databaseService.getFolderContents(props);

  createFolder = async ({
    name,
    parentFolderId,
  }: CreateFolder): Promise<FileSystemNode> => {
    let parentFolder: FileSystemNode | undefined;
    if (parentFolderId) {
      parentFolder = await this.databaseService.getFolderById(parentFolderId);
    }
    const pathIds = parentFolder
      ? parentFolder.pathIds + `/${parentFolder.id}`
      : `/${this.databaseService.getUserId()}`;
    return this.databaseService.createFolder({ name, parentFolderId }, pathIds);
  };
}
