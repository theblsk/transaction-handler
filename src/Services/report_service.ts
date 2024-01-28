import type { ObjectId } from "mongoose";
import type BasicFunctions from "../Interfaces/BasicFunctions";
import { Report, type ReportModel } from "../Models/Report";
import type { TransactionModel } from "../Models/Transaction";
import type { PayoutModel } from "../Models/Payout";
import type { TModel } from "../Interfaces/BasicFunctions";

export default class ReportService implements BasicFunctions<ReportModel> {
  constructor() {}


  // used on every new transaction

  async updateOnTransactionCreation(
    transaction: TransactionModel,
    objectId: ObjectId
  ): Promise<void | null> {
    try {
      const transactionId = transaction.transactionId;
      const merchantId = transaction.merchantId;
      const report = await Report.findOne({
        transactionId: transactionId,
        merchantId: merchantId,
      });
      if (report) {
        await report.updateOne({
          reportDate: transaction.eventDate,
          currency: transaction.currency,
          paymentMethod: transaction.paymentMethod,
          recordType:
            transaction.success && transaction.status === "SETTLED"
              ? "Settled"
              : "Unsettled",
          transactionsHandled: [...report.transactionsHandled, objectId],
        });
        await report.save();
      } else {
        await this.create({
          reportDate: transaction.eventDate,
          transactionId: transaction.transactionId,
          merchantId: transaction.merchantId,
          mainAmount: 0,
          currency: transaction.currency,
          paymentMethod: transaction.paymentMethod,
          recordType:
            transaction.success && transaction.eventCode === "SETTLED"
              ? "Settled"
              : "Unsettled",
          transactionsHandled: [objectId],
          payoutsHandled: [],
        });
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }

  // Used on every new payout
  async updateOnPayoutCreation(
    payout: PayoutModel,
    objectId: ObjectId
  ): Promise<void | null> {
    try {
      const transactionId = payout.transactionId;
      const merchantId = payout.merchantId;
      const report = await Report.findOne({
        transactionId: transactionId,
        merchantId: merchantId,
      });
      if (report) {
        const newAmount = report.mainAmount + payout.partialAmount;
        await report.updateOne({
          reportDate: payout.date,
          mainAmount: newAmount,
          payoutsHandled: [...report.payoutsHandled, objectId],
        });
        await report.save();
      } else {
        return Promise.reject("No report found");
      }
    } catch (err) {
      return Promise.reject(err);
    }
  }

  getAll(): Promise<TModel<ReportModel>[]> {
    try {
      return Report.find();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  getById(id: string): Promise<TModel<ReportModel> | null> {
    try {
      return Report.findById(id);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  create(data: ReportModel): Promise<TModel<ReportModel>> {
    try {
      return Report.create(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  createMany(data: ReportModel[]): Promise<TModel<ReportModel>[]> {
    try {
      return Report.insertMany(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  update(id: string, data: ReportModel): Promise<TModel<ReportModel> | null> {
    try {
      return Report.findByIdAndUpdate(id, data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  updateMany(data: ReportModel[]): Promise<TModel<ReportModel>[]> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<TModel<ReportModel> | null> {
    try {
      return Report.findByIdAndDelete(id);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  deleteMany(): Promise<TModel<ReportModel>[]> {
    throw new Error("Method not implemented.");
  }
}
