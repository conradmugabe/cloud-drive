import { FileSystemDatabaseService } from '@core/services/file.system.database.service';
import {
  CreateFolder,
  DeleteFileSystemNode,
  GetFolderContents,
} from '@dto/file.system.node.dto';
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

  deleteFileSystemNode = async ({
    id,
  }: DeleteFileSystemNode): Promise<void> => {
    await this.databaseService.getFolderById(id);
    return this.databaseService.deleteFileSystemNode(id);
  };

  moveFileSystemNode = async ({
    id,
    parentFolderId,
  }: FileSystemDatabaseService.MoveFileSystemNode): Promise<FileSystemNode> => {
    const folder = await this.databaseService.getFolderById(id);
    let parentFolder: FileSystemNode | undefined;
    if (parentFolderId) {
      parentFolder = await this.databaseService.getFolderById(parentFolderId);

      if (folder.pathIds.includes(parentFolderId)) {
        throw new Error("Forbidden Error: Can't copy folder into self ");
      }
    }
    const pathIds = parentFolder
      ? parentFolder.pathIds + `/${parentFolder.id}`
      : `/${this.databaseService.getUserId()}`;

    return this.databaseService.moveFileSystemNode({
      id: folder.id,
      pathIds,
      parentFolderId: parentFolder?.id || this.databaseService.getUserId(),
    });
  };

  renameFileSystemNode = async ({
    id,
    name,
  }: FileSystemDatabaseService.RenameFileSystemNode): Promise<FileSystemNode> => {
    const folder = await this.databaseService.getFolderById(id);
    if (folder.name === name) return folder;
    return this.databaseService.renameFileSystemNode({ id, name });
  };
}
