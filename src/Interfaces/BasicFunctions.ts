import type { Document, Types } from "mongoose";

export type TModel<T> = Document<unknown, {}, T> &
  T & {
    _id: Types.ObjectId;
  };

export default interface BasicFunctions<T> {
  getAll(): Promise<TModel<T>[]>;
  getById(id: string): Promise<TModel<T> | null>;
  create(data: T): Promise<TModel<T>>;
  createMany(data: T[]): Promise<TModel<T>[]>;
  update(id: string, data: T): Promise<TModel<T> | null>;
  updateMany(data: T[]): Promise<TModel<T>[]>;
  delete(id: string): Promise<TModel<T> | null>;
  deleteMany(): Promise<TModel<T>[]>;
}
