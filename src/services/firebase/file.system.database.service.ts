import { CreateFolder, GetFolderContents } from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';
import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { auth, databases } from './init';
import { FileSystemDbService } from '@services/api.local/services/file.system.db.service';

export class FirebaseFileSystemDatabaseService implements FileSystemDbService {
  getUserId = () => auth.currentUser?.uid || '';

  getFolderContents = async ({
    folderId,
  }: GetFolderContents): Promise<FileSystemNode[]> => {
    const q = query(
      databases.fileSystem,
      where('parentFolderId', '==', folderId || this.getUserId()),
      where('ownedBy', '==', this.getUserId())
    );
    const querySnapshot = await getDocs(q);
    const nodes: FileSystemNode[] = [];
    querySnapshot.forEach((doc) => {
      nodes.push({ id: doc.id, ...doc.data() });
    });
    return nodes;
  };

  createFolder = async (
    { name, parentFolderId }: CreateFolder,
    pathIds: string
  ): Promise<FileSystemNode> => {
    const docRef = await addDoc(databases.fileSystem, {
      name,
      ownedBy: this.getUserId(),
      createdBy: this.getUserId(),
      createdAt: '',
      parentFolderId: parentFolderId || this.getUserId(),
      path: '',
      pathIds,
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

  deleteFileSystemNode = async (id: string) => {
    await deleteDoc(doc(databases.fileSystem, id));
  };

  moveFileSystemNode = async ({
    id,
    parentFolderId,
    pathIds,
  }: FileSystemDbService.MoveFileSystemNode): Promise<FileSystemNode> => {
    const docRef = doc(databases.fileSystem, id);
    await updateDoc(docRef, {
      parentFolderId,
      pathIds,
    });
    return this.getFolderById(id);
  };

  renameFileSystemNode = async ({
    id,
    name,
  }: FileSystemDbService.RenameFileSystemNode): Promise<FileSystemNode> => {
    const docRef = doc(databases.fileSystem, id);
    await updateDoc(docRef, {
      name,
    });
    return this.getFolderById(id);
  };
}
