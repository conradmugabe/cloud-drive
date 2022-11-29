import { UPLOADS_API_URL } from '../../core/constants';
import { requests } from '../apiClient';

type GetUploadKeyResponse = {
  signedUrl: string;
};

export const getUploadKey = (): Promise<GetUploadKeyResponse> => {
  const URL = 'file';
  return requests.get(UPLOADS_API_URL + URL);
};

export const uploadFile = (signedUrl: string, file: File) => {
  return requests.put(signedUrl, file, {
    headers: { 'Content-Type': file.type },
  });
};
