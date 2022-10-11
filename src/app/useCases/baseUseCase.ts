import BaseApi from '../infra/repositories/baseApi';

export default class BaseUseCase {
  constructor(readonly repository: BaseApi) {}

  addItem<T, R>(props: T): Promise<R> {
    return this.repository.addItem(props);
  }

  updateItem<T, R>(props: T): Promise<R> {
    return this.repository.updateItem(props);
  }

  deleteItem(id: string): Promise<void> {
    return this.repository.deleteItem(id);
  }

  readOne<T>(): Promise<T> {
    return this.repository.readOne();
  }

  readMany<T>(): Promise<T[]> {
    return this.repository.readMany();
  }
}
