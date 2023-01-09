import { z } from 'zod';
import { BaseEntity } from '@entities/base.entity';

const FileSystemNode = BaseEntity.merge(
  z.object({
    name: z.string(),
    type: z.string(),
    path: z.string(),
    pathIds: z.string(),
    parentFolderId: z.string(),
    createdBy: z.string(),
    ownedBy: z.string(),
    size: z.number(),
    fileUrl: z.string().optional(),
  })
);
type FileSystemNode = z.infer<typeof FileSystemNode>;

export { FileSystemNode };
