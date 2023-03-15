export abstract class FilesService {
  abstract getSignedUrl(
    props: FilesService.GetSignedUrlRequest
  ): Promise<FilesService.GetSignedUrlResponse>;

  abstract uploadFile(props: FilesService.UploadFileRequest): Promise<void>;
}

export namespace FilesService {
  export type GetSignedUrlRequest = { fileExtension: string };
  export type GetSignedUrlResponse = { signedUrl: string };
  export type UploadFileRequest = { file: File; signedUrl: string };
}
