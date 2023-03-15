import {
  AddFile,
  CreateFolder,
  GetFolderContents,
} from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';

export abstract class FileSystemDbService {
  abstract getFolderContents(
    props: GetFolderContents
  ): Promise<FileSystemNode[]>;

  abstract getUserId(): string;

  abstract getFolderById(id: string): Promise<FileSystemNode>;

  abstract createFolder(
    props: CreateFolder,
    pathIds: string
  ): Promise<FileSystemNode>;

  abstract deleteFileSystemNode(id: string): Promise<void>;

  abstract moveFileSystemNode(
    props: FileSystemDbService.MoveFileSystemNode
  ): Promise<FileSystemNode>;

  abstract renameFileSystemNode(
    props: FileSystemDbService.RenameFileSystemNode
  ): Promise<FileSystemNode>;

  abstract addFile(props: AddFile, pathIds: string): Promise<FileSystemNode>;
}

export namespace FileSystemDbService {
  export type MoveFileSystemNode = {
    id: string;
    parentFolderId: string;
    pathIds: string;
  };

  export type RenameFileSystemNode = {
    name: string;
    id: string;
  };
}
