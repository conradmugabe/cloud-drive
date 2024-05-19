import { v4 as uuidv4 } from 'uuid';
import { FileSystemDatabaseService } from '@core/services/file.system.database.service';
import { FilesService } from '@core/services/files.service';
import {
  AddFile,
  CreateFolder,
  DeleteFileSystemNode,
  GetFolderContents,
} from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';
import { FileSystemDbService } from './services/file.system.db.service';
import { StorageService } from '@core/services/storage.service';

export class ApiLocal implements FileSystemDatabaseService, FilesService {
  constructor(
    private databaseService: FileSystemDbService,
    private storageService: StorageService
  ) {}

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

  addFile = async ({
    name,
    type,
    fileUrl,
    size,
    parentFolderId,
  }: AddFile): Promise<FileSystemNode> => {
    let parentFolder: FileSystemNode | undefined;
    if (parentFolderId) {
      parentFolder = await this.databaseService.getFolderById(parentFolderId);
    }
    const pathIds = parentFolder
      ? parentFolder.pathIds + `/${parentFolder.id}`
      : `/${this.databaseService.getUserId()}`;
    return this.databaseService.addFile(
      { name, type, fileUrl, size, parentFolderId },
      pathIds
    );
  };

  getSignedUrl = async (
    props: FilesService.GetSignedUrlRequest
  ): Promise<FilesService.GetSignedUrlResponse> => {
    const userId = this.databaseService.getUserId();
    const fileId = uuidv4();

    const contentTypeList = props.fileExtension.split('/');
    const fileType = contentTypeList[contentTypeList.length - 1];

    const signedUrl = `${userId}/${fileId}.${fileType}`;
    return { signedUrl };
  };

  uploadFile = (props: FilesService.UploadFileRequest): Promise<void> => {
    return this.storageService.uploadFile(props);
  };
}
