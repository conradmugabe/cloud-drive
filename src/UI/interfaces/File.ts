export interface FSNode {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  type: string;
  path: string;
  parentFolder: string;
  createdBy: string;
  ownedBy: string;
  size: number;
}
