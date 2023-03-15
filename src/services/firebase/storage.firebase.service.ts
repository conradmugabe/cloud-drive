import { ref, uploadBytes } from 'firebase/storage';
import { StorageService } from '@core/services/storage.service';
import { storage } from '../../services/firebase/init';

export class StorageFirebaseService implements StorageService {
  uploadFile = async (props: StorageService.UploadFile): Promise<void> => {
    const storageRef = ref(storage, props.signedUrl);

    uploadBytes(storageRef, props.file).then((snapshot) => {
      return;
    });
  };
}
