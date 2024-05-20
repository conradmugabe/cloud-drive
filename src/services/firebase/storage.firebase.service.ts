import {
  deleteObject,
  getMetadata,
  listAll,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { StorageService } from '@core/services/storage.service';
import { storage } from '../../services/firebase/init';

export class StorageFirebaseService implements StorageService {
  uploadFile = async (props: StorageService.UploadFile): Promise<void> => {
    const storageRef = ref(storage, props.signedUrl);

    const uploadTask = uploadBytesResumable(storageRef, props.file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const { bytesTransferred, totalBytes } = snapshot;
        const progress = Math.round((bytesTransferred / totalBytes) * 100);

        props.setProgress(progress);
      },
      (error) => {
        props.setProgress(0);
      },
      () => {
        props.setProgress(0);
      }
    );
  };

  getStorageUsed = async (
    props: StorageService.GetStorageUsed
  ): Promise<number> => {
    const userRef = ref(storage, props.userId);

    try {
      const userFiles = await listAll(userRef);
      const fileSizePromises = userFiles.items.map(async (itemRef) => {
        const metadata = await getMetadata(itemRef);
        return metadata.size;
      });

      const fileSizes = await Promise.all(fileSizePromises);
      const totalSize = fileSizes.reduce((acc, size) => acc + size, 0);

      return totalSize;
    } catch (error) {
      console.error('Error getting user storage size:', error);
      return 0; // or throw an error, depending on your error handling strategy
    }
  };

  deleteFile = async (props: StorageService.DeleteFile): Promise<void> => {
    const fileRef = ref(storage, props.filePath);

    await deleteObject(fileRef);
  };
}
