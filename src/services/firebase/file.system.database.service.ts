import {} from 'firebase/auth';
import { FileSystemDatabaseService } from '@core/services/file.system.database.service';
import { CreateFolder, GetFolderContents } from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';
import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { auth, databases } from './init';

export class FirebaseFileSystemDatabaseService
  implements FileSystemDatabaseService
{
  private userId = auth.currentUser?.uid || '';

  getFolderContents = async ({
    folderId,
  }: GetFolderContents): Promise<FileSystemNode[]> => {
    const q = query(
      databases.fileSystem,
      where('parentId', '==', folderId),
      where('userId', '==', this.userId)
    );
    const querySnapshot = await getDocs(q);
    const nodes: FileSystemNode[] = [];
    querySnapshot.forEach((doc) => {
      nodes.push({ id: doc.id, ...doc.data() });
    });
    return nodes;
  };

  createFolder = async ({
    name,
    parentFolderId,
  }: CreateFolder): Promise<FileSystemNode> => {
    let parentFolder: FileSystemNode | undefined;
    if (parentFolderId) {
      parentFolder = await this.getFolderById(parentFolderId);
    }
    const pathIds = parentFolder
      ? parentFolder.pathIds + `/${parentFolder.id}`
      : `/${this.userId}`;
    const docRef = await addDoc(databases.fileSystem, {
      name,
      ownedBy: this.userId,
      createdBy: this.userId,
      createdAt: '',
      parentFolderId: parentFolderId || this.userId,
      path: '',
      pathIds: '',
      size: 0,
      type: 'folder',
      updatedAt: '',
    });
    return this.getFolderById(docRef.id);
  };

  getFolderById = async (id: string): Promise<FileSystemNode> => {
    const docRef = doc(databases.fileSystem, id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error('No such document!');
    return { id: docSnap.id, ...docSnap.data() };
  };
}
