import mongoose from "mongoose";

export type TransactionModel = {
  transactionId: string;
  merchantId: string;
  eventCode: string; // Event code is the same as transactionType
  status: string;
  eventDate: Date;
  amount: number;
  currency: string;
  success: boolean;
  paymentMethod: string;
};
export const transactionSchema = new mongoose.Schema<TransactionModel>({
  transactionId: { type: String, required: true },
  merchantId: { type: String, required: true },
  eventCode: { type: String, required: true },
  status: { type: String, required: true },
  eventDate: { type: Date, default: () => Date.now(), immutable: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: "$" },
  success: { type: Boolean, required: true },
  paymentMethod: { type: String, required: true },
});

const Transaction = mongoose.model<TransactionModel>(
  "Transaction",
  transactionSchema
);



export default Transaction;
