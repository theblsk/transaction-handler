import mongoose, { type ObjectId } from "mongoose";

export type ReportModel = {
  reportDate: Date; //Inferred from either date in Payout or eventDate in Transaction
  transactionId: string;
  merchantId: string;
  mainAmount: number; // Changed on every Payout
  currency: string; // Determined by Transaction
  paymentMethod: string; //Inferred from Transation
  recordType: string; // eg. Settled, inferred from Transaction sucess and status fields
  transactionsHandled: ObjectId[];
  payoutsHandled: ObjectId[];
};

export const ReportSchema = new mongoose.Schema<ReportModel>({
  reportDate: { type: Date, required: true },
  transactionId: { type: String, required: true },
  merchantId: { type: String, required: true },
  mainAmount: { type: Number, required: true },
  currency: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  recordType: { type: String, required: true },
  transactionsHandled: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
  ],
  payoutsHandled: [{ type: mongoose.Schema.Types.ObjectId, ref: "Payout" }],
});

export const Report = mongoose.model<ReportModel>("Report", ReportSchema);
