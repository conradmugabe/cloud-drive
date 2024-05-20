export abstract class FilesService {
  abstract getSignedUrl(
    props: FilesService.GetSignedUrlRequest
  ): Promise<FilesService.GetSignedUrlResponse>;

  abstract uploadFile(props: FilesService.UploadFileRequest): Promise<void>;

  abstract getStorageUsed(props: FilesService.GetStorageUsed): Promise<number>;
}

export namespace FilesService {
  export type GetSignedUrlRequest = { fileExtension: string };
  export type GetSignedUrlResponse = { signedUrl: string };
  export type UploadFileRequest = {
    file: File;
    signedUrl: string;
    setProgress: (progress: number) => void;
  };
  export type GetStorageUsed = {
    userId: string;
  }
}
