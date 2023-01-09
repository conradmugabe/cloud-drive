import { z } from 'zod';

const CreateFolder = z.object({
  name: z.string(),
  parentFolderId: z.string().optional(),
});
type CreateFolder = z.infer<typeof CreateFolder>;

const RenameFileSystemNode = z.object({
  name: z.string(),
  id: z.string(),
});
type RenameFileSystemNode = z.infer<typeof RenameFileSystemNode>;

export { CreateFolder, RenameFileSystemNode };
