import { FileSystemDatabaseService } from '@core/services/file.system.database.service';
import { GetFolderContents } from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';

export class FileSystemUseCases {
  constructor(private databaseService: FileSystemDatabaseService) {}

  getFolderContents = async (
    props: GetFolderContents
  ): Promise<FileSystemNode[]> => {
    return this.databaseService.getFolderContents(props);
  };
}
