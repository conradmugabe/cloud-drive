import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { TOKEN_KEY } from '../core/constants';

const responseBody = (response: AxiosResponse) => response.data;

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem(TOKEN_KEY);
  const parsedToken = token && token !== 'undefined' ? JSON.parse(token) : null;

  if (config.headers) {
    config.headers.Authorization = parsedToken;
  } else {
    config.headers = {
      Authorization: parsedToken,
    };
  }
  return config;
};

axios.interceptors.request.use(onRequest);

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === 'Network Error') {
    // Network Error - Please check your network
  }
  const { status, config } = error.response;
  if (status === 401) {
    //
  }
  if (status === 400 || config.method === 'get') {
    //
  }
  if (status === 404) {
    //
  }
  if (status === 500) {
    //
  }
});

export const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

export const requests = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    axios.get(url, config).then(responseBody),
  post: (url: string, body: {}, config?: AxiosRequestConfig) =>
    axios.post(url, body, config).then(responseBody),
  put: (url: string, body: {}, config?: AxiosRequestConfig) =>
    axios.put(url, body, config).then(responseBody),
  patch: (url: string, body: {}, config?: AxiosRequestConfig) =>
    axios.patch(url, body, config).then(responseBody),
  delete: (url: string, config?: AxiosRequestConfig) =>
    axios.delete(url, config).then(responseBody),
};
