import { BaseEntity } from './base.entity';

export type FileSystemNode = {
  name: string;
  type: string;
  path: string;
  pathIds: string;
  parentFolderId: string;
  createdBy: string;
  ownedBy: string;
  size: number;
  fileUrl?: string;
} & BaseEntity;
