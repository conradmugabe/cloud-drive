import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from 'firebase/firestore';
import { firebaseConfig } from '@config/firebase';
import { FileSystemNode } from '@entities/file.system.node.entity';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

const databases = {
  fileSystem: createCollection<Omit<FileSystemNode, 'id'>>('file-system'),
};

export { auth, databases };
