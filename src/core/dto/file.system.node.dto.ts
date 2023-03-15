import { HasID } from '@entities/base.entity';
import { FileSystemNode } from '@entities/file.system.node.entity';
import { z } from 'zod';

const CreateFolder = z.object({
  name: z.string(),
  parentFolderId: z.string().optional(),
});
type CreateFolder = z.infer<typeof CreateFolder>;

const AddFile = CreateFolder.merge(
  z.object({
    fileUrl: z.string(),
    type: z.string(),
    size: z.number()
  })
);
type AddFile = z.infer<typeof AddFile>;

const RenameFileSystemNode = z.object({
  name: z.string(),
  id: z.string(),
});
type RenameFileSystemNode = z.infer<typeof RenameFileSystemNode>;

const GetFolderContents = z.object({ folderId: z.string().optional() });
type GetFolderContents = z.infer<typeof GetFolderContents>;

const DeleteFileSystemNode = HasID;
type DeleteFileSystemNode = z.infer<typeof DeleteFileSystemNode>;

const MoveFileSystemNode = z.object({
  file: FileSystemNode,
  parentFolderId: z.string().optional(),
});
type MoveFileSystemNode = z.infer<typeof MoveFileSystemNode>;

export {
  CreateFolder,
  RenameFileSystemNode,
  GetFolderContents,
  DeleteFileSystemNode,
  MoveFileSystemNode,
  AddFile,
};
