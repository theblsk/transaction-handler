import mongoose from "mongoose";

export type ReportModel = {
  reportDate: Date; //Inferred from either Booking date or Creation date
  transactionId: string;
  merchantId: string;
  mainAmount: number;
  currency: string;
  paymentMethod: string;
  recordType: string; // eg. Settled
};

export const ReportSchema = new mongoose.Schema<ReportModel>({
    reportDate: { type: Date, required: true },
    transactionId: { type: String, required: true },
    merchantId: { type: String, required: true },
    mainAmount: { type: Number, required: true },
    currency: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    recordType: { type: String, required: true },
});

export const Report = mongoose.model<ReportModel>("Report", ReportSchema);