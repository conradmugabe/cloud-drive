import { CreateFolder, GetFolderContents } from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';

export abstract class FileSystemDatabaseService {
  abstract getFolderContents(
    props: GetFolderContents
  ): Promise<FileSystemNode[]>;

  abstract createFolder(props: CreateFolder): Promise<FileSystemNode>;
}