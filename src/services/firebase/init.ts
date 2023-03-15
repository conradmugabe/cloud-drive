import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
  Timestamp,
} from 'firebase/firestore';
import { firebaseConfig } from '@config/firebase';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

type FileSystemNodeModel = {
  id: string;
  name: string;
  type: string;
  path: string;
  pathIds: string;
  parentFolderId: string;
  createdBy: string;
  ownedBy: string;
  size: number;
  fileUrl?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

const databases = {
  fileSystem: createCollection<Omit<FileSystemNodeModel, 'id'>>('file-system'),
};

export { auth, databases, storage };
