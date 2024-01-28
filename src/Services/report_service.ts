import type BasicFunctions from "../Interfaces/BasicFunctions";
import { Report, type ReportModel } from "../Models/Report";
import type PayoutService from "./payout_service";
import type TransactionService from "./transaction_service";

export default class ReportService implements BasicFunctions<ReportModel> {
  constructor(
    private transactionService: TransactionService,
    private payoutService: PayoutService
  ) {}

  //   findReportByTransactionIdAndMerchantId(
  //     transactionId: string,
  //     merchantId: string
  //   ): Promise<ReportModel | null> {
  //     try {
  //       return Report.findOne({
  //         transactionId: transactionId,
  //         merchantId: merchantId,
  //       });
  //     } catch (err) {
  //       return Promise.reject(err);
  //     }
  //   }

  async updateReportOnTransactionOrPayoutUpdate(
    transactionId: string,
    merchantId: string
  ): Promise<ReportModel | null> {
    try {
      const transaction = await this.transactionService.getById(transactionId);
      const payout = await this.payoutService.getById(transactionId);
      
      return Report.findOneAndUpdate(
        {
          transactionId: transactionId,
          merchantId: merchantId,
        },
        {
          reportDate: new Date(),
        }
      );
    } catch (err) {
      return Promise.reject(err);
    }
  }

  getAll(): Promise<ReportModel[]> {
    try {
      return Report.find();
    } catch (err) {
      return Promise.reject(err);
    }
  }
  getById(id: string): Promise<ReportModel | null> {
    try {
      return Report.findById(id);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  create(data: ReportModel): Promise<ReportModel> {
    try {
      return Report.create(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  createMany(data: ReportModel[]): Promise<ReportModel[]> {
    try {
      return Report.insertMany(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  update(id: string, data: ReportModel): Promise<ReportModel | null> {
    try {
      return Report.findByIdAndUpdate(id, data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  updateMany(data: ReportModel[]): Promise<ReportModel[]> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<ReportModel | null> {
    try {
      return Report.findByIdAndDelete(id);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  deleteMany(): Promise<ReportModel[]> {
    throw new Error("Method not implemented.");
  }
}
