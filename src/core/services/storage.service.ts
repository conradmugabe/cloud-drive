export abstract class StorageService {
  abstract uploadFile(props: StorageService.UploadFile): Promise<void>;
}

export namespace StorageService {
  export type UploadFile = {
    file: File;
    signedUrl: string;
    setProgress: (progress: number) => void;
  };
}
