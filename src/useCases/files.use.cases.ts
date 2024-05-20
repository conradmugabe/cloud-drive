import { FilesService } from '@core/services/files.service';

export class FilesUseCases {
  constructor(private filesService: FilesService) {}

  getSignedUrl = (props: FilesUseCases.GetSignedUrlRequest) => {
    return this.filesService.getSignedUrl(props);
  };

  uploadFile = (props: FilesUseCases.UploadFileRequest): Promise<void> => {
    return this.filesService.uploadFile(props);
  };
}

namespace FilesUseCases {
  export type GetSignedUrlRequest = { fileExtension: string };
  export type GetSignedUrlResponse = { signedUrl: string };
  export type UploadFileRequest = {
    file: File;
    signedUrl: string;
    setProgress: (progress: number) => void;
  };
}
