import type BasicFunctions from "../Interfaces/BasicFunctions.ts";
import Transaction, { type TransactionModel } from "../Models/Transaction.ts";

export default class TransactionService
  implements BasicFunctions<TransactionModel>
{
  create(data: TransactionModel): Promise<TransactionModel> {
    try {
      return Transaction.create(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  createMany(data: TransactionModel[]): Promise<TransactionModel[]> {
    try {
      return Transaction.insertMany(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  delete(id: string): Promise<TransactionModel | null> {
    try {
      return Transaction.findByIdAndDelete(id);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  deleteMany(): Promise<TransactionModel[]> {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<TransactionModel[]> {
    try {
      return Transaction.find();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  getById(id: string): Promise<TransactionModel | null> {
    try {
      return Transaction.findById(id);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  update(id: string, data: TransactionModel): Promise<TransactionModel | null> {
    try {
      return Transaction.findByIdAndUpdate(id, data);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  updateMany(data: TransactionModel[]): Promise<TransactionModel[]> {
    throw new Error("Method not implemented.");
  }
}
