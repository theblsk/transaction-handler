import mongoose from "mongoose";

export type TransactionModel = {
    transactionDate: Date;
    transactionType: string;
}
export const transactionSchema = new mongoose.Schema<TransactionModel>({
    transactionDate: {type: Date, required: true},
    transactionType: {type: String, required: true},
});

const Transaction = mongoose.model<TransactionModel>("Transaction", transactionSchema);

export default Transaction;
