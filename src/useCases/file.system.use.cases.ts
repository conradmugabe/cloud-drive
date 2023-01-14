import { FileSystemDatabaseService } from '@core/services/file.system.database.service';
import {
  CreateFolder,
  GetFolderContents,
  MoveFileSystemNode,
} from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';

export class FileSystemUseCases {
  constructor(private databaseService: FileSystemDatabaseService) {}

  getFolderContents = async (
    props: GetFolderContents
  ): Promise<FileSystemNode[]> => this.databaseService.getFolderContents(props);

  createFolder = async (props: CreateFolder): Promise<FileSystemNode> =>
    this.databaseService.createFolder(props);

  deleteFileSystemNode = async (props: FileSystemNode): Promise<void> =>
    this.databaseService.deleteFileSystemNode({ id: props.id });

  moveFileSystemNode = async (
    props: MoveFileSystemNode
  ): Promise<FileSystemNode> =>
    this.databaseService.moveFileSystemNode({
      id: props.file.id,
      parentFolderId: props.parentFolderId,
    });

  renameFileSystemNode = async (
    props: FileSystemUseCases.RenameFileSystemNode
  ): Promise<FileSystemNode> =>
    this.databaseService.renameFileSystemNode(props);
}

namespace FileSystemUseCases {
  export type RenameFileSystemNode = { name: string; id: string };
}
