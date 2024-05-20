import { ref, uploadBytesResumable } from 'firebase/storage';
import { StorageService } from '@core/services/storage.service';
import { storage } from '../../services/firebase/init';

export class StorageFirebaseService implements StorageService {
  uploadFile = async (props: StorageService.UploadFile): Promise<void> => {
    const storageRef = ref(storage, props.signedUrl);

    const uploadTask = uploadBytesResumable(storageRef, props.file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
}
