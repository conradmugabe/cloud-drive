import BaseRepository from '../../useCases/interfaces/baseRepository';
import requests from './helpers/axios';

export default class BaseApi implements BaseRepository {
  constructor(readonly baseUrl: string) {}

  addItem<T, R>(props: T): Promise<R> {
    return requests.post(this.baseUrl, props);
  }

  updateItem<T, R>(props: T): Promise<R> {
    return requests.put(this.baseUrl, props);
  }

  readOne<T>(): Promise<T> {
    return requests.get(this.baseUrl);
  }

  readMany<T>(): Promise<T[]> {
    return requests.get(this.baseUrl);
  }

  deleteItem(id: string): Promise<void> {
    return requests.delete(id);
  }
}
