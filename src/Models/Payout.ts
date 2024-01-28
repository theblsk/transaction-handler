import mongoose from "mongoose";

export type PayoutModel = {
  date: Date;
  partialAmout: number;
  transactionId: string;
  merchantId: string;
  splitId: string;
  destinationAccount: string;
};

export const PayoutSchema = new mongoose.Schema<PayoutModel>({
  date: { type: Date, required: true },
  partialAmout: { type: Number, required: true },
  transactionId: { type: String, required: true },
  merchantId: { type: String, required: true },
  splitId: { type: String, required: true },
  destinationAccount: { type: String, required: true },
});

export const Payout = mongoose.model<PayoutModel>("Payout", PayoutSchema);