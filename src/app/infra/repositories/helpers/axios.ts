import axios, { AxiosResponse, AxiosError } from 'axios';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: <T>(url: string): Promise<T> => axios.get(url).then(responseBody),
  post: <T, R>(url: string, body: T): Promise<R> =>
    axios.post(url, body).then(responseBody),
  put: <T, R>(url: string, body: T): Promise<R> =>
    axios.put(url, body).then(responseBody),
  delete: <T>(url: string): Promise<T> => axios.delete(url).then(responseBody),
};

axios.interceptors.response.use(undefined, (error: AxiosError) => {
  console.log(error);
});

export default requests;
