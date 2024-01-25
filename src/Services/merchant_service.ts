import type BasicFunctions from "../Interfaces/BasicFunctions";
import type { MerchantModel } from "../Models/Merchant";
import Merchant from "../Models/Merchant";

export default class MerchantService implements BasicFunctions<MerchantModel> {
  getAll(): Promise<MerchantModel[]> {
    try {
      return Merchant.find();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  getById(id: string): Promise<MerchantModel | null> {
    try {
      return Merchant.findById(id);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  create(data: MerchantModel): Promise<MerchantModel> {
    try {
      return Merchant.create(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  createMany(data: MerchantModel[]): Promise<MerchantModel[]> {
    try {
      return Merchant.insertMany(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  update(id: string, data: MerchantModel): Promise<MerchantModel | null> {
    try {
      return Merchant.findByIdAndUpdate(id, data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  updateMany(data: MerchantModel[]): Promise<MerchantModel[]> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<MerchantModel | null> {
    try {
      return Merchant.findByIdAndDelete(id);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  deleteMany(): Promise<MerchantModel[]> {
    throw new Error("Method not implemented.");
  }
}
