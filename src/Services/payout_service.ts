import type { TModel } from "../Interfaces/BasicFunctions";
import type BasicFunctions from "../Interfaces/BasicFunctions";
import { Payout, type PayoutModel } from "../Models/Payout";

export default class PayoutService implements BasicFunctions<PayoutModel> {
  getAll(): Promise<TModel<PayoutModel>[]> {
    try {
      return Payout.find();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  getById(id: string): Promise<TModel<PayoutModel> | null> {
    try {
      return Payout.findById(id);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  create(data: PayoutModel): Promise<TModel<PayoutModel>> {
    try{
        return Payout.create(data);
    }
    catch(err){
        return Promise.reject(err);
    }
  }
  createMany(data: PayoutModel[]): Promise<TModel<PayoutModel>[]> {
    try {
      return Payout.insertMany(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  update(id: string, data: PayoutModel): Promise<TModel<PayoutModel> | null> {
    try{
        return Payout.findByIdAndUpdate(id, data);
    }
    catch(err){
        return Promise.reject(err);
    }
  }
  updateMany(data: PayoutModel[]): Promise<TModel<PayoutModel>[]> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<TModel<PayoutModel> | null> {
    try{
        return Payout.findByIdAndDelete(id);
    }
    catch(err){
        return Promise.reject(err);
    }
  }
  deleteMany(): Promise<TModel<PayoutModel>[]> {
    throw new Error("Method not implemented.");
  }
}
