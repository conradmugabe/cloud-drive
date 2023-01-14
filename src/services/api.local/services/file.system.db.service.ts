import { CreateFolder, GetFolderContents } from '@dto/file.system.node.dto';
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
}
