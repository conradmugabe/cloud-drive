import { CreateFolder, GetFolderContents } from '@dto/file.system.node.dto';
import { FileSystemNode } from '@entities/file.system.node.entity';
import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
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
      nodes.push({
        id: doc.id,
        ...doc.data(),
        createdAt: String(doc.data().createdAt.toDate().toISOString()),
        updatedAt: String(doc.data().updatedAt.toDate().toISOString()),
      });
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
      parentFolderId: parentFolderId || this.getUserId(),
      path: '',
      pathIds,
      size: 0,
      type: 'folder',
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
    });
    return this.getFolderById(docRef.id);
  };

  getFolderById = async (id: string): Promise<FileSystemNode> => {
    const docRef = doc(databases.fileSystem, id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error('No such document!');
    return {
      id: docSnap.id,
      ...docSnap.data(),
      createdAt: String(docSnap.data().createdAt.toDate().toISOString()),
      updatedAt: String(docSnap.data().updatedAt.toDate().toISOString()),
    };
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
      updatedAt: serverTimestamp(),
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
      updatedAt: serverTimestamp(),
    });
    return this.getFolderById(id);
  };
}
