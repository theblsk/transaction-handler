import mongoose from "mongoose";

export type MerchantModel = {
    merchantId: string;
    name: string;
    address: string;
    phone: string;
    mail: string;
    password: string;
    balance: number;
}

export const merchantSchema = new mongoose.Schema<MerchantModel>({
    merchantId: {type: String, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    mail: {type: String, required: true},
    password: {type: String, required: true},
    balance: {type: Number, required: true},
});

const Merchant = mongoose.model<MerchantModel>("Merchant", merchantSchema);

export default Merchant;