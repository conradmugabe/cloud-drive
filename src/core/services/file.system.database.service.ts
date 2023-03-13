import {
  CreateFolder,
  DeleteFileSystemNode,
  GetFolderContents,
} from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';

export abstract class FileSystemDatabaseService {
  abstract getFolderContents(
    props: GetFolderContents
  ): Promise<FileSystemNode[]>;

  abstract createFolder(props: CreateFolder): Promise<FileSystemNode>;

  abstract deleteFileSystemNode(props: DeleteFileSystemNode): Promise<void>;

  abstract moveFileSystemNode(
    props: FileSystemDatabaseService.MoveFileSystemNode
  ): Promise<FileSystemNode>;

  abstract renameFileSystemNode(
    props: FileSystemDatabaseService.RenameFileSystemNode
  ): Promise<FileSystemNode>;
}

export namespace FileSystemDatabaseService {
  export type MoveFileSystemNode = { id: string; parentFolderId?: string };

  export type RenameFileSystemNode = { name: string; id: string };
}
