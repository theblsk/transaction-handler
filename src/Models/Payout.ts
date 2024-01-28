import mongoose from "mongoose";

export type PayoutModel = {
  date: Date;
  partialAmount: number;
  transactionId: string;
  merchantId: string;
  splitId: string;
  destinationAccount: string;
};

export const PayoutSchema = new mongoose.Schema<PayoutModel>({
  date: { type: Date, default: () => Date.now(), immutable: true },
  partialAmount: { type: Number, required: true },
  transactionId: { type: String, required: true },
  merchantId: { type: String, required: true },
  splitId: { type: String, required: true },
  destinationAccount: { type: String, required: true },
});

export const Payout = mongoose.model<PayoutModel>("Payout", PayoutSchema);
