import mongoose from "mongoose";

export type NotificationModel = {
    notificationId: string;
    notificationDate: Date;
    notificationType: string;
    merchantId: string;
    transactionId: string;
}