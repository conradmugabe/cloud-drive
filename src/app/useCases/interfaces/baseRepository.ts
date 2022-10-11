export default interface BaseRepository {
  addItem<T, R>(props: T): Promise<R>;
  updateItem<T, R>(props: T): Promise<R>;
  deleteItem(id: string): Promise<void>;
  readOne<T>(): Promise<T>;
  readMany<T>(): Promise<T[]>;
}
