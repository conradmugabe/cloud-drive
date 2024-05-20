export abstract class StorageService {
  abstract uploadFile(props: StorageService.UploadFile): Promise<void>;

  abstract getStorageUsed(
    props: StorageService.GetStorageUsed
  ): Promise<number>;

  abstract deleteFile(props: StorageService.DeleteFile): Promise<void>;
}

export namespace StorageService {
  export type UploadFile = {
    file: File;
    signedUrl: string;
    setProgress: (progress: number) => void;
  };

  export type GetStorageUsed = {
    userId: string;
  };

  export type DeleteFile = {
    filePath: string;
  };
}
