import {Router} from "express";
import Transaction from "../Models/Transaction.ts";

const router = Router();

router.get("/", async (req, res) => {
    await Transaction.insertMany([
        {
            transactionId: "1",
            transactionDate: new Date(),
            transactionType: "debit"
        },
        {
            transactionId: "2",
            transactionDate: new Date(),
            transactionType: "credit"
        }
    ]);
    const data = await Transaction.find();
    res.json({
        message: "Connection Successful",
        data
    });
});

export default router;